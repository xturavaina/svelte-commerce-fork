import { sdk } from '$lib/server/magento'
import { redirect, type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import type { Cookies } from '@sveltejs/kit'

const initializeCustomer: Handle = async ({ event, resolve }) => {
  const { locals, cookies } = event

  const customerToken = cookies.get('customer_token')

    // Stablish token in locals if exist
  if (customerToken) {
    locals.customerToken = customerToken

    // Fetch customer data only if token is valid and present
    try {
      const { customer: customerData } = await sdk.getCustomer(
        {},
        { Authorization: `Bearer ${customerToken}` }
      )
      locals.customer = customerData
      locals.loggedIn = true
    } catch (error: any) {

    // Error during the authentication, treat as not authenticated
      locals.loggedIn = false;
    }
  } else {
    // No token, treat as guest customer
    locals.loggedIn = false;
  }
    // If the user is not logged in, remove the token cookie
  if (!locals.loggedIn) {
    cookies.delete('customer_token', { path: '/' })
  }

  return resolve(event)
}

  // Initialize cart procedure
async function createCart(locals: App.Locals, cookies: Cookies): Promise<string | undefined> {
  let cartId = cookies.get('cart_id')

  if (!cartId) {
    try {
      if (locals.loggedIn) {
        const { customerCart } = await sdk.createCustomerCart({}, {
          Authorization: `Bearer ${locals.customerToken}`,
        });
        cartId = customerCart?.id
      } else {
        const { id } = await sdk.createGuestCart()
        cartId = id
      }

      if (cartId) {
        cookies.set('cart_id', cartId, { path: '/' })
        return cartId;
      } else {
        console.error('Could not create cart.');
      }
    } catch (error) {
        console.error('Error creating cart:', error)
    }
  }
  // Try to get cart if cardId is defined
  if (cartId) {
    try {
      const { cart } = await sdk.getCart({ cartId }, {
        Authorization: `Bearer ${locals.customerToken}`,
      });
      locals.cart = cart
    } catch (error) {
      console.error('Error retrieving cart:', error)
      cookies.delete('cart_id', { path: '/' })
    }
  }

  return cartId

}

const initializeCart: Handle = async ({ event, resolve }) => {
  const { locals, cookies } = event;

  await createCart(locals, cookies)

  return resolve(event)
}

const initializeStoreConfig: Handle = async ({ event, resolve }) => {
  const { locals } = event
  const { storeConfig } = await sdk.getStoreConfig()
  locals.storeConfig = storeConfig
  return resolve(event)
}

const nonRestrictedUrls = [
  '/customer/account/create',
  '/customer/account/login',
  '/customer/account/forgot-password',
]

const restrictAccessToCustomerArea: Handle = async ({ event, resolve }) => {
  if (
    event.url.pathname.startsWith('/customer') &&
    !event.locals.loggedIn &&
    !nonRestrictedUrls.includes(event.url.pathname)
  ) {
    // Restrict access to the customer account pages if the user is not logged in
    throw redirect(302, '/customer/account/login')
  }

  return resolve(event)
}

export const handle: Handle = sequence(
  initializeCustomer,
  restrictAccessToCustomerArea,
  initializeCart,
  initializeStoreConfig
)

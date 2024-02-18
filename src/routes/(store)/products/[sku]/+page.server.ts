import type { ProductInterface, StoreConfig } from '$lib/generated/graphql'
import { getProduct } from '$lib/server/catalog'
import type { ServerLoad } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'

export const load: ServerLoad = async ({ params, locals }) => {
  if (!params.sku) {
    throw error(404, 'Product not found')
  }

  const product = (await getProduct(params.sku)) as ProductInterface
  const storeconfig = locals.storeConfig as StoreConfig

  if (!product) {
    throw error(404, 'Product not found')
  }

  if (!storeconfig) {
    throw error(404, 'Store configuration not found')
  }

  return {
    product,
    storeconfig,
  }
}

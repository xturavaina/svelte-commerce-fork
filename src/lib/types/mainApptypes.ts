// src/lib/types/mainApptypes.ts

import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };


type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

//** roger Dependencias de tipos colaterales */

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
    /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
    uid: Scalars['ID']['input'];
    /** Text the customer entered. */
    value: Scalars['String']['input'];
  };

/** Defines an item to be added to the cart. */
export type CartItemInput = {
    /** An array of entered options for the base product, such as personalization text. */
    entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
    /** For a child product, the SKU of its parent product. */
    parent_sku?: InputMaybe<Scalars['String']['input']>;
    /** The amount or number of an item to add. */
    quantity: Scalars['Float']['input'];
    /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
    selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    /** The SKU of the product. */
    sku: Scalars['String']['input'];
  };

  /** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
    /** @deprecated  */
    InStock = 'IN_STOCK',
    /** @deprecated  */
    OutOfStock = 'OUT_OF_STOCK'
  }

  /** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
    /** Attribute label: Nombre */
    name?: InputMaybe<SortEnum>;
    /** Sort by the position assigned to each product. */
    position?: InputMaybe<SortEnum>;
    /** Sort by the search relevance score (default). */
    relevance?: InputMaybe<SortEnum>;
  };

  /** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  /** @deprecated  */
  Asc = 'ASC',
  /** @deprecated  */
  Desc = 'DESC'
}

/** Defines a single shipping address. */
export type ShippingAddressInput = {
    /** Defines a shipping address. */
    address?: InputMaybe<CartAddressInput>;
    /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
    customer_address_id?: InputMaybe<Scalars['Int']['input']>;
    /** Text provided by the shopper. */
    customer_notes?: InputMaybe<Scalars['String']['input']>;
    /** The code of Pickup Location which will be used for In-Store Pickup. */
    pickup_location_code?: InputMaybe<Scalars['String']['input']>;
  };

  export type Country = {
    __typename?: 'Country';
    /** An array of regions within a particular country. */
    available_regions: Maybe<Array<Maybe<Region>>>;
    /** The name of the country in English. */
    full_name_english: Maybe<Scalars['String']['output']>;
    /** The name of the country in the current locale. */
    full_name_locale: Maybe<Scalars['String']['output']>;
    /** The unique ID for a `Country` object. */
    id: Maybe<Scalars['String']['output']>;
    /** The three-letter abbreviation of the country, such as USA. */
    three_letter_abbreviation: Maybe<Scalars['String']['output']>;
    /** The two-letter abbreviation of the country, such as US. */
    two_letter_abbreviation: Maybe<Scalars['String']['output']>;
  };

  export type Region = {
  __typename?: 'Region';
  /** The two-letter code for the region, such as TX for Texas. */
  code: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object. */
  id: Maybe<Scalars['Int']['output']>;
  /** The name of the region, such as Texas. */
  name: Maybe<Scalars['String']['output']>;
};

  /** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
    /** The city specified for the billing or shipping address. */
    city: Scalars['String']['input'];
    /** The company specified for the billing or shipping address. */
    company?: InputMaybe<Scalars['String']['input']>;
    /** The country code and label for the billing or shipping address. */
    country_code: Scalars['String']['input'];
    /** The first name of the customer or guest. */
    firstname: Scalars['String']['input'];
    /** The last name of the customer or guest. */
    lastname: Scalars['String']['input'];
    /** The ZIP or postal code of the billing or shipping address. */
    postcode?: InputMaybe<Scalars['String']['input']>;
    /** A string that defines the state or province of the billing or shipping address. */
    region?: InputMaybe<Scalars['String']['input']>;
    /** An integer that defines the state or province of the billing or shipping address. */
    region_id?: InputMaybe<Scalars['Int']['input']>;
    /** Determines whether to save the address in the customer's address book. The default value is true. */
    save_in_address_book?: InputMaybe<Scalars['Boolean']['input']>;
    /** An array containing the street for the billing or shipping address. */
    street: Array<InputMaybe<Scalars['String']['input']>>;
    /** The telephone number for the billing or shipping address. */
    telephone?: InputMaybe<Scalars['String']['input']>;
  };

  /** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
    /** A string that identifies a commercial carrier or an offline delivery method. */
    carrier_code: Scalars['String']['input'];
    /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
    method_code: Scalars['String']['input'];
  };

  /** Defines the billing address. */
export type BillingAddressInput = {
    /** Defines a billing address. */
    address?: InputMaybe<CartAddressInput>;
    /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
    customer_address_id?: InputMaybe<Scalars['Int']['input']>;
    /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
    same_as_shipping?: InputMaybe<Scalars['Boolean']['input']>;
    /** Indicates whether to set the shipping address to be the same as this billing address. */
    use_for_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  };

  /** Indicates the status of the request. */
export enum SubscriptionStatusesEnum {
    /** @deprecated  */
    NotActive = 'NOT_ACTIVE',
    /** @deprecated  */
    Subscribed = 'SUBSCRIBED',
    /** @deprecated  */
    Unconfirmed = 'UNCONFIRMED',
    /** @deprecated  */
    Unsubscribed = 'UNSUBSCRIBED'
  }

/** Defines the payment method. */
export type PaymentMethodInput = {
    /** Required input for Adyen alternative payment methods. */
    adyen_additional_data?: InputMaybe<AdyenAdditionalData>;
    /** Required input for Adyen CC payments. */
    adyen_additional_data_cc?: InputMaybe<AdyenAdditionalDataCc>;
    /** Required input for Adyen POS Cloud payments. */
    adyen_additional_data_pos_cloud?: InputMaybe<AdyenAdditionalDataPosCloud>;
    braintree?: InputMaybe<BraintreeInput>;
    braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
    /** The internal name for the payment method. */
    code: Scalars['String']['input'];
    /** Required input for PayPal Hosted pro payments. */
    hosted_pro?: InputMaybe<HostedProInput>;
    /** Required input for Payflow Express Checkout payments. */
    payflow_express?: InputMaybe<PayflowExpressInput>;
    /** Required input for PayPal Payflow Link and Payments Advanced payments. */
    payflow_link?: InputMaybe<PayflowLinkInput>;
    /** Required input for PayPal Payflow Pro and Payment Pro payments. */
    payflowpro?: InputMaybe<PayflowProInput>;
    /** Required input for PayPal Payflow Pro vault payments. */
    payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
    /** Required input for Express Checkout and Payments Standard payments. */
    paypal_express?: InputMaybe<PaypalExpressInput>;
    /** The purchase order number. Optional for most payment methods. */
    purchase_order_number?: InputMaybe<Scalars['String']['input']>;
  };

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
    /** The unique ID of the PayPal user. */
    payer_id: Scalars['String']['input'];
    /** The token returned by the `createPaypalExpressToken` mutation. */
    token: Scalars['String']['input'];
  };

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
    /** The public hash of the payment token. */
    public_hash: Scalars['String']['input'];
  };

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
    /** Required input for credit card related information. */
    cc_details: CreditCardDetailsInput;
    /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
    is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
  };

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
    /** The credit card expiration month. */
    cc_exp_month: Scalars['Int']['input'];
    /** The credit card expiration year. */
    cc_exp_year: Scalars['Int']['input'];
    /** The last 4 digits of the credit card. */
    cc_last_4: Scalars['Int']['input'];
    /** The credit card type. */
    cc_type: Scalars['String']['input'];
  };

  /** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
    /** The unique ID of the PayPal user. */
    payer_id: Scalars['String']['input'];
    /** The token returned by the createPaypalExpressToken mutation. */
    token: Scalars['String']['input'];
  };
  
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
  export type PayflowLinkInput = {
    /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String']['input'];
    /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
    error_url: Scalars['String']['input'];
    /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String']['input'];
  };

  export type HostedProInput = {
    /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String']['input'];
    /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String']['input'];
  };

  export type BraintreeCcVaultInput = {
    device_data?: InputMaybe<Scalars['String']['input']>;
    public_hash: Scalars['String']['input'];
  };
  
  export type BraintreeInput = {
    /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
    device_data?: InputMaybe<Scalars['String']['input']>;
    /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
    is_active_payment_token_enabler: Scalars['Boolean']['input'];
    /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
    payment_method_nonce: Scalars['String']['input'];
  };

  export type AdyenAdditionalData = {
    /** Type of alternative payment method. */
    brand_code: Scalars['String']['input'];
    /** Ratepay device identification token. */
    df_value?: InputMaybe<Scalars['String']['input']>;
    /** Email address if customer is guest. */
    guestEmail?: InputMaybe<Scalars['String']['input']>;
    /** Recurring processing model to tokenize the payment method. */
    recurringProcessingModel?: InputMaybe<Scalars['String']['input']>;
    /** The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. It can include a placeholder `:merchantReference` to identify the order e.g. `https://your-company.com/checkout?shopperOrder=:merchantReference`. */
    returnUrl?: InputMaybe<Scalars['String']['input']>;
    /** JSON string of filled fields. */
    stateData: Scalars['String']['input'];
  };

  export type AdyenAdditionalDataCc = {
    /** Credit card brand. */
    cc_type?: InputMaybe<Scalars['String']['input']>;
    /** Debit or Credit card. */
    combo_card_type?: InputMaybe<Scalars['String']['input']>;
    /** Email address if customer is guest. */
    guestEmail?: InputMaybe<Scalars['String']['input']>;
    /** If combo_card_type is credit, Number of installments for the payment. */
    number_of_installments?: InputMaybe<Scalars['Int']['input']>;
    /** Recurring processing model to tokenize the payment method. */
    recurringProcessingModel?: InputMaybe<Scalars['String']['input']>;
    /** The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. It can include a placeholder `:merchantReference` to identify the order e.g. `https://your-company.com/checkout?shopperOrder=:merchantReference`. */
    returnUrl?: InputMaybe<Scalars['String']['input']>;
    /** JSON string of filled fields. */
    stateData?: InputMaybe<Scalars['String']['input']>;
  };
  
  export type AdyenAdditionalDataPosCloud = {
    /** Number of installments for the payment. */
    number_of_installments?: InputMaybe<Scalars['Int']['input']>;
    /** Terminal ID of selected terminal. */
    terminal_id?: InputMaybe<Scalars['String']['input']>;
  };

//** roger fin de dependencias colaterales */


export type CreateCustomerCartQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateCustomerCartQuery = { __typename?: 'Query', customerCart: { __typename?: 'Cart', id: string } };

export type CreateGuestCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateGuestCartMutation = { __typename?: 'Mutation', id: string };

export type GetCartQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetCartQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', id: string, items: Array<{ __typename?: 'BundleCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } } | { __typename?: 'ConfigurableCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } } | { __typename?: 'DownloadableCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } } | { __typename?: 'SimpleCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } } | { __typename?: 'VirtualCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } }>, prices: { __typename?: 'CartPrices', discounts: Array<{ __typename?: 'Discount', label: string, amount: { __typename?: 'Money', currency: CurrencyEnum, value: number } }>, grand_total: { __typename?: 'Money', currency: CurrencyEnum, value: number }, subtotal_excluding_tax: { __typename?: 'Money', currency: CurrencyEnum, value: number }, subtotal_including_tax: { __typename?: 'Money', currency: CurrencyEnum, value: number } } } };

export type AddProductToCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  cartItem: CartItemInput;
}>;


export type AddProductToCartMutation = { __typename?: 'Mutation', addProductsToCart: { __typename?: 'AddProductsToCartOutput', cart: { __typename?: 'Cart', items: Array<{ __typename?: 'BundleCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', sku: string } | { __typename?: 'ConfigurableProduct', sku: string } | { __typename?: 'DownloadableProduct', sku: string } | { __typename?: 'GroupedProduct', sku: string } | { __typename?: 'SimpleProduct', sku: string } | { __typename?: 'VirtualProduct', sku: string } } | { __typename?: 'ConfigurableCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', sku: string } | { __typename?: 'ConfigurableProduct', sku: string } | { __typename?: 'DownloadableProduct', sku: string } | { __typename?: 'GroupedProduct', sku: string } | { __typename?: 'SimpleProduct', sku: string } | { __typename?: 'VirtualProduct', sku: string } } | { __typename?: 'DownloadableCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', sku: string } | { __typename?: 'ConfigurableProduct', sku: string } | { __typename?: 'DownloadableProduct', sku: string } | { __typename?: 'GroupedProduct', sku: string } | { __typename?: 'SimpleProduct', sku: string } | { __typename?: 'VirtualProduct', sku: string } } | { __typename?: 'SimpleCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', sku: string } | { __typename?: 'ConfigurableProduct', sku: string } | { __typename?: 'DownloadableProduct', sku: string } | { __typename?: 'GroupedProduct', sku: string } | { __typename?: 'SimpleProduct', sku: string } | { __typename?: 'VirtualProduct', sku: string } } | { __typename?: 'VirtualCartItem', id: string, quantity: number, product: { __typename?: 'BundleProduct', sku: string } | { __typename?: 'ConfigurableProduct', sku: string } | { __typename?: 'DownloadableProduct', sku: string } | { __typename?: 'GroupedProduct', sku: string } | { __typename?: 'SimpleProduct', sku: string } | { __typename?: 'VirtualProduct', sku: string } }> } } };

export type GetProductsQueryVariables = Exact<{
  sku: Scalars['String']['input'];
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'Products', items: Array<{ __typename: 'BundleProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } } | { __typename: 'ConfigurableProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, configurable_options: Array<{ __typename?: 'ConfigurableProductOptions', attribute_code: string, attribute_id: string, label: string, position: number, values: Array<{ __typename?: 'ConfigurableProductOptionsValues', uid: string, label: string }> }>, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } } | { __typename: 'DownloadableProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } } | { __typename: 'GroupedProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } } | { __typename: 'SimpleProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } } | { __typename: 'VirtualProduct', uid: string, name: string, sku: string, stock_status: ProductStockStatus, only_x_left_in_stock: number, url_key: string, type_id: string, rating_summary: number, review_count: number, description: { __typename?: 'ComplexTextValue', html: string }, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string }, categories: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, url_path: string, canonical_url: string, breadcrumbs: Array<{ __typename?: 'Breadcrumb', category_id: number, category_level: number, category_name: string, category_uid: string, category_url_key: string, category_url_path: string }> }>, reviews: { __typename?: 'ProductReviews', items: Array<{ __typename?: 'ProductReview', summary: string, average_rating: number, nickname: string, text: string, created_at: string }> } }> } };

export type GetCategoriesQueryVariables = Exact<{
  urlKey: Scalars['String']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryResult', items: Array<{ __typename?: 'CategoryTree', id: number, name: string, url_key: string, description: string, image: string }> } };

export type GetCategoryProductsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCategoryProductsQuery = { __typename?: 'Query', category: { __typename?: 'CategoryTree', products: { __typename?: 'CategoryProducts', items: Array<{ __typename?: 'BundleProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, uid: string, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } }> } } };

export type SearchProductsQueryVariables = Exact<{
  query: Scalars['String']['input'];
  pageSize: Scalars['Int']['input'];
  currentPage: Scalars['Int']['input'];
  sort: ProductAttributeSortInput;
}>;


export type SearchProductsQuery = { __typename?: 'Query', products: { __typename?: 'Products', total_count: number, items: Array<{ __typename?: 'BundleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'ConfigurableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'DownloadableProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'GroupedProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'SimpleProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } } | { __typename?: 'VirtualProduct', id: number, name: string, sku: string, url_key: string, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value: number, currency: CurrencyEnum } } }, image: { __typename?: 'ProductImage', url: string } }> } };

export type SetShippingAddressOnCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  address: ShippingAddressInput;
}>;


export type SetShippingAddressOnCartMutation = { __typename?: 'Mutation', setShippingAddressesOnCart: { __typename?: 'SetShippingAddressesOnCartOutput', cart: { __typename?: 'Cart', shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', firstname: string, lastname: string, street: Array<string>, city: string, postcode: string, telephone: string, country: { __typename?: 'CartAddressCountry', code: string } }> } } };

export type GetCartShippingAddressesQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetCartShippingAddressesQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', firstname: string, lastname: string, street: Array<string>, city: string, postcode: string, telephone: string, country: { __typename?: 'CartAddressCountry', code: string, label: string }, selected_shipping_method: { __typename?: 'SelectedShippingMethod', carrier_code: string, method_code: string } }> } };

export type GetAvailableShippingMethodsQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetAvailableShippingMethodsQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', selected_shipping_method: { __typename?: 'SelectedShippingMethod', carrier_code: string, method_code: string }, available_shipping_methods: Array<{ __typename?: 'AvailableShippingMethod', available: boolean, carrier_code: string, carrier_title: string, method_code: string, method_title: string }> }> } };

export type GetCartBillingAddressQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetCartBillingAddressQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', billing_address: { __typename?: 'BillingCartAddress', firstname: string, lastname: string, street: Array<string>, city: string, postcode: string, telephone: string, country: { __typename?: 'CartAddressCountry', code: string, label: string } } } };

export type SetShippingMethodsOnCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  shippingMethods: Array<InputMaybe<ShippingMethodInput>> | InputMaybe<ShippingMethodInput>;
}>;


export type SetShippingMethodsOnCartMutation = { __typename?: 'Mutation', setShippingMethodsOnCart: { __typename?: 'SetShippingMethodsOnCartOutput', cart: { __typename?: 'Cart', shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', selected_shipping_method: { __typename?: 'SelectedShippingMethod', carrier_code: string, method_code: string, carrier_title: string, method_title: string } }> } } };

export type SetBillingAddressOnCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  address: BillingAddressInput;
}>;


export type SetBillingAddressOnCartMutation = { __typename?: 'Mutation', setBillingAddressOnCart: { __typename?: 'SetBillingAddressOnCartOutput', cart: { __typename?: 'Cart', billing_address: { __typename?: 'BillingCartAddress', firstname: string, lastname: string, street: Array<string>, city: string, postcode: string, telephone: string, country: { __typename?: 'CartAddressCountry', code: string } } } } };

export type GetAvailablePaymentMethodsQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetAvailablePaymentMethodsQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string }, available_payment_methods: Array<{ __typename?: 'AvailablePaymentMethod', code: string, title: string }> } };

export type SetPaymentMethodOnCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  paymentMethod: PaymentMethodInput;
}>;


export type SetPaymentMethodOnCartMutation = { __typename?: 'Mutation', setPaymentMethodOnCart: { __typename?: 'SetPaymentMethodOnCartOutput', cart: { __typename?: 'Cart', selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string, title: string } } } };

export type PlaceOrderMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder: { __typename?: 'PlaceOrderOutput', order: { __typename?: 'Order', order_number: string, order_id: string } } };

export type SetGuestEmailOnCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type SetGuestEmailOnCartMutation = { __typename?: 'Mutation', setGuestEmailOnCart: { __typename?: 'SetGuestEmailOnCartOutput', cart: { __typename?: 'Cart', email: string } } };

export type GetCmsPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCmsPageQuery = { __typename?: 'Query', cmsPage: { __typename?: 'CmsPage', title: string, content: string } };

export type GetCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', firstname: string, lastname: string, email: string, allow_remote_shopping_assistance: boolean } };

export type RevokeCustomerTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RevokeCustomerTokenMutation = { __typename?: 'Mutation', revokeCustomerToken: { __typename?: 'RevokeCustomerTokenOutput', result: boolean } };

export type GenerateCustomerTokenMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type GenerateCustomerTokenMutation = { __typename?: 'Mutation', customer: { __typename?: 'CustomerToken', token: string } };

export type RequestPasswordResetEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RequestPasswordResetEmailMutation = { __typename?: 'Mutation', result: boolean };

export type CreateCustomerMutationVariables = Exact<{
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', firstname: string, lastname: string, email: string, is_subscribed: boolean } } };

export type GetCustomerAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerAddressesQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', addresses: Array<{ __typename?: 'CustomerAddress', id: number, firstname: string, lastname: string, street: Array<string>, company: string, city: string, postcode: string, country_code: CountryCodeEnum, telephone: string, default_shipping: boolean, default_billing: boolean }> } };

export type GetCustomerOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerOrdersQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', orders: { __typename?: 'CustomerOrders', items: Array<{ __typename?: 'CustomerOrder', id: string, order_number: string, created_at: string, status: string, total: { __typename?: 'OrderTotal', grand_total: { __typename?: 'Money', currency: CurrencyEnum, value: number } } }> } } };

export type IsCustomerSubscribedToNewsletterQueryVariables = Exact<{ [key: string]: never; }>;


export type IsCustomerSubscribedToNewsletterQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', is_subscribed: boolean } };

export type SetCustomerNewsletterSubscriptionMutationVariables = Exact<{
  isSubscribed: Scalars['Boolean']['input'];
}>;


export type SetCustomerNewsletterSubscriptionMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', is_subscribed: boolean } } };

export type UpdateCustomerInformationMutationVariables = Exact<{
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  email: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  updateCustomerEmail: Scalars['Boolean']['input'];
  updateCustomerPassword: Scalars['Boolean']['input'];
}>;


export type UpdateCustomerInformationMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', firstname: string, lastname: string } }, updateCustomerEmail?: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', email: string } }, changeCustomerPassword?: { __typename?: 'Customer', id: number, email: string } };

export type SubscribeToNewsletterMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeEmailToNewsletter: { __typename?: 'SubscribeEmailToNewsletterOutput', status: SubscriptionStatusesEnum } };

export type GetStoreConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoreConfigQuery = { __typename?: 'Query', storeConfig: { __typename?: 'StoreConfig', cms_home_page: string, default_title: string, default_description: string, default_keywords: string, copyright: string, header_logo_src: string, logo_width: number, logo_height: number } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: string, full_name_locale: string, available_regions: Array<{ __typename?: 'Region', id: number, name: string, code: string }> }> };

/** The list of available currency codes. */
export enum CurrencyEnum {
    /** @deprecated  */
    Aed = 'AED',
    /** @deprecated  */
    Afn = 'AFN',
    /** @deprecated  */
    All = 'ALL',
    /** @deprecated  */
    Amd = 'AMD',
    /** @deprecated  */
    Ang = 'ANG',
    /** @deprecated  */
    Aoa = 'AOA',
    /** @deprecated  */
    Ars = 'ARS',
    /** @deprecated  */
    Aud = 'AUD',
    /** @deprecated  */
    Awg = 'AWG',
    /** @deprecated  */
    Azm = 'AZM',
    /** @deprecated  */
    Azn = 'AZN',
    /** @deprecated  */
    Bam = 'BAM',
    /** @deprecated  */
    Bbd = 'BBD',
    /** @deprecated  */
    Bdt = 'BDT',
    /** @deprecated  */
    Bgn = 'BGN',
    /** @deprecated  */
    Bhd = 'BHD',
    /** @deprecated  */
    Bif = 'BIF',
    /** @deprecated  */
    Bmd = 'BMD',
    /** @deprecated  */
    Bnd = 'BND',
    /** @deprecated  */
    Bob = 'BOB',
    /** @deprecated  */
    Brl = 'BRL',
    /** @deprecated  */
    Bsd = 'BSD',
    /** @deprecated  */
    Btn = 'BTN',
    /** @deprecated  */
    Buk = 'BUK',
    /** @deprecated  */
    Bwp = 'BWP',
    /** @deprecated  */
    Byn = 'BYN',
    /** @deprecated  */
    Bzd = 'BZD',
    /** @deprecated  */
    Cad = 'CAD',
    /** @deprecated  */
    Cdf = 'CDF',
    /** @deprecated  */
    Che = 'CHE',
    /** @deprecated  */
    Chf = 'CHF',
    /** @deprecated  */
    Chw = 'CHW',
    /** @deprecated  */
    Clp = 'CLP',
    /** @deprecated  */
    Cny = 'CNY',
    /** @deprecated  */
    Cop = 'COP',
    /** @deprecated  */
    Crc = 'CRC',
    /** @deprecated  */
    Cup = 'CUP',
    /** @deprecated  */
    Cve = 'CVE',
    /** @deprecated  */
    Czk = 'CZK',
    /** @deprecated  */
    Djf = 'DJF',
    /** @deprecated  */
    Dkk = 'DKK',
    /** @deprecated  */
    Dop = 'DOP',
    /** @deprecated  */
    Dzd = 'DZD',
    /** @deprecated  */
    Eek = 'EEK',
    /** @deprecated  */
    Egp = 'EGP',
    /** @deprecated  */
    Ern = 'ERN',
    /** @deprecated  */
    Etb = 'ETB',
    /** @deprecated  */
    Eur = 'EUR',
    /** @deprecated  */
    Fjd = 'FJD',
    /** @deprecated  */
    Fkp = 'FKP',
    /** @deprecated  */
    Gbp = 'GBP',
    /** @deprecated  */
    Gek = 'GEK',
    /** @deprecated  */
    Gel = 'GEL',
    /** @deprecated  */
    Ghs = 'GHS',
    /** @deprecated  */
    Gip = 'GIP',
    /** @deprecated  */
    Gmd = 'GMD',
    /** @deprecated  */
    Gnf = 'GNF',
    /** @deprecated  */
    Gqe = 'GQE',
    /** @deprecated  */
    Gtq = 'GTQ',
    /** @deprecated  */
    Gyd = 'GYD',
    /** @deprecated  */
    Hkd = 'HKD',
    /** @deprecated  */
    Hnl = 'HNL',
    /** @deprecated  */
    Hrk = 'HRK',
    /** @deprecated  */
    Htg = 'HTG',
    /** @deprecated  */
    Huf = 'HUF',
    /** @deprecated  */
    Idr = 'IDR',
    /** @deprecated  */
    Ils = 'ILS',
    /** @deprecated  */
    Inr = 'INR',
    /** @deprecated  */
    Iqd = 'IQD',
    /** @deprecated  */
    Irr = 'IRR',
    /** @deprecated  */
    Isk = 'ISK',
    /** @deprecated  */
    Jmd = 'JMD',
    /** @deprecated  */
    Jod = 'JOD',
    /** @deprecated  */
    Jpy = 'JPY',
    /** @deprecated  */
    Kes = 'KES',
    /** @deprecated  */
    Kgs = 'KGS',
    /** @deprecated  */
    Khr = 'KHR',
    /** @deprecated  */
    Kmf = 'KMF',
    /** @deprecated  */
    Kpw = 'KPW',
    /** @deprecated  */
    Krw = 'KRW',
    /** @deprecated  */
    Kwd = 'KWD',
    /** @deprecated  */
    Kyd = 'KYD',
    /** @deprecated  */
    Kzt = 'KZT',
    /** @deprecated  */
    Lak = 'LAK',
    /** @deprecated  */
    Lbp = 'LBP',
    /** @deprecated  */
    Lkr = 'LKR',
    /** @deprecated  */
    Lrd = 'LRD',
    /** @deprecated  */
    Lsl = 'LSL',
    /** @deprecated  */
    Lsm = 'LSM',
    /** @deprecated  */
    Ltl = 'LTL',
    /** @deprecated  */
    Lvl = 'LVL',
    /** @deprecated  */
    Lyd = 'LYD',
    /** @deprecated  */
    Mad = 'MAD',
    /** @deprecated  */
    Mdl = 'MDL',
    /** @deprecated  */
    Mga = 'MGA',
    /** @deprecated  */
    Mkd = 'MKD',
    /** @deprecated  */
    Mmk = 'MMK',
    /** @deprecated  */
    Mnt = 'MNT',
    /** @deprecated  */
    Mop = 'MOP',
    /** @deprecated  */
    Mro = 'MRO',
    /** @deprecated  */
    Mur = 'MUR',
    /** @deprecated  */
    Mvr = 'MVR',
    /** @deprecated  */
    Mwk = 'MWK',
    /** @deprecated  */
    Mxn = 'MXN',
    /** @deprecated  */
    Myr = 'MYR',
    /** @deprecated  */
    Mzn = 'MZN',
    /** @deprecated  */
    Nad = 'NAD',
    /** @deprecated  */
    Ngn = 'NGN',
    /** @deprecated  */
    Nic = 'NIC',
    /** @deprecated  */
    Nok = 'NOK',
    /** @deprecated  */
    Npr = 'NPR',
    /** @deprecated  */
    Nzd = 'NZD',
    /** @deprecated  */
    Omr = 'OMR',
    /** @deprecated  */
    Pab = 'PAB',
    /** @deprecated  */
    Pen = 'PEN',
    /** @deprecated  */
    Pgk = 'PGK',
    /** @deprecated  */
    Php = 'PHP',
    /** @deprecated  */
    Pkr = 'PKR',
    /** @deprecated  */
    Pln = 'PLN',
    /** @deprecated  */
    Pyg = 'PYG',
    /** @deprecated  */
    Qar = 'QAR',
    /** @deprecated  */
    Rhd = 'RHD',
    /** @deprecated  */
    Rol = 'ROL',
    /** @deprecated  */
    Ron = 'RON',
    /** @deprecated  */
    Rsd = 'RSD',
    /** @deprecated  */
    Rub = 'RUB',
    /** @deprecated  */
    Rwf = 'RWF',
    /** @deprecated  */
    Sar = 'SAR',
    /** @deprecated  */
    Sbd = 'SBD',
    /** @deprecated  */
    Scr = 'SCR',
    /** @deprecated  */
    Sdg = 'SDG',
    /** @deprecated  */
    Sek = 'SEK',
    /** @deprecated  */
    Sgd = 'SGD',
    /** @deprecated  */
    Shp = 'SHP',
    /** @deprecated  */
    Skk = 'SKK',
    /** @deprecated  */
    Sll = 'SLL',
    /** @deprecated  */
    Sos = 'SOS',
    /** @deprecated  */
    Srd = 'SRD',
    /** @deprecated  */
    Std = 'STD',
    /** @deprecated  */
    Svc = 'SVC',
    /** @deprecated  */
    Syp = 'SYP',
    /** @deprecated  */
    Szl = 'SZL',
    /** @deprecated  */
    Thb = 'THB',
    /** @deprecated  */
    Tjs = 'TJS',
    /** @deprecated  */
    Tmm = 'TMM',
    /** @deprecated  */
    Tnd = 'TND',
    /** @deprecated  */
    Top = 'TOP',
    /** @deprecated  */
    Trl = 'TRL',
    /** @deprecated  */
    Try = 'TRY',
    /** @deprecated  */
    Ttd = 'TTD',
    /** @deprecated  */
    Twd = 'TWD',
    /** @deprecated  */
    Tzs = 'TZS',
    /** @deprecated  */
    Uah = 'UAH',
    /** @deprecated  */
    Ugx = 'UGX',
    /** @deprecated  */
    Usd = 'USD',
    /** @deprecated  */
    Uyu = 'UYU',
    /** @deprecated  */
    Uzs = 'UZS',
    /** @deprecated  */
    Veb = 'VEB',
    /** @deprecated  */
    Vef = 'VEF',
    /** @deprecated  */
    Vnd = 'VND',
    /** @deprecated  */
    Vuv = 'VUV',
    /** @deprecated  */
    Wst = 'WST',
    /** @deprecated  */
    Xcd = 'XCD',
    /** @deprecated  */
    Xof = 'XOF',
    /** @deprecated  */
    Xpf = 'XPF',
    /** @deprecated  */
    Yer = 'YER',
    /** @deprecated  */
    Ytl = 'YTL',
    /** @deprecated  */
    Zar = 'ZAR',
    /** @deprecated  */
    Zmk = 'ZMK',
    /** @deprecated  */
    Zwd = 'ZWD'
  }

  /** The list of country codes. */
export enum CountryCodeEnum {
    /**
     * Andorra
     * @deprecated
     */
    Ad = 'AD',
    /**
     * United Arab Emirates
     * @deprecated
     */
    Ae = 'AE',
    /**
     * Afghanistan
     * @deprecated
     */
    Af = 'AF',
    /**
     * Antigua & Barbuda
     * @deprecated
     */
    Ag = 'AG',
    /**
     * Anguilla
     * @deprecated
     */
    Ai = 'AI',
    /**
     * Albania
     * @deprecated
     */
    Al = 'AL',
    /**
     * Armenia
     * @deprecated
     */
    Am = 'AM',
    /**
     * Netherlands Antilles
     * @deprecated
     */
    An = 'AN',
    /**
     * Angola
     * @deprecated
     */
    Ao = 'AO',
    /**
     * Antarctica
     * @deprecated
     */
    Aq = 'AQ',
    /**
     * Argentina
     * @deprecated
     */
    Ar = 'AR',
    /**
     * American Samoa
     * @deprecated
     */
    As = 'AS',
    /**
     * Austria
     * @deprecated
     */
    At = 'AT',
    /**
     * Australia
     * @deprecated
     */
    Au = 'AU',
    /**
     * Aruba
     * @deprecated
     */
    Aw = 'AW',
    /**
     * Åland Islands
     * @deprecated
     */
    Ax = 'AX',
    /**
     * Azerbaijan
     * @deprecated
     */
    Az = 'AZ',
    /**
     * Bosnia & Herzegovina
     * @deprecated
     */
    Ba = 'BA',
    /**
     * Barbados
     * @deprecated
     */
    Bb = 'BB',
    /**
     * Bangladesh
     * @deprecated
     */
    Bd = 'BD',
    /**
     * Belgium
     * @deprecated
     */
    Be = 'BE',
    /**
     * Burkina Faso
     * @deprecated
     */
    Bf = 'BF',
    /**
     * Bulgaria
     * @deprecated
     */
    Bg = 'BG',
    /**
     * Bahrain
     * @deprecated
     */
    Bh = 'BH',
    /**
     * Burundi
     * @deprecated
     */
    Bi = 'BI',
    /**
     * Benin
     * @deprecated
     */
    Bj = 'BJ',
    /**
     * St. Barthélemy
     * @deprecated
     */
    Bl = 'BL',
    /**
     * Bermuda
     * @deprecated
     */
    Bm = 'BM',
    /**
     * Brunei
     * @deprecated
     */
    Bn = 'BN',
    /**
     * Bolivia
     * @deprecated
     */
    Bo = 'BO',
    /**
     * Brazil
     * @deprecated
     */
    Br = 'BR',
    /**
     * Bahamas
     * @deprecated
     */
    Bs = 'BS',
    /**
     * Bhutan
     * @deprecated
     */
    Bt = 'BT',
    /**
     * Bouvet Island
     * @deprecated
     */
    Bv = 'BV',
    /**
     * Botswana
     * @deprecated
     */
    Bw = 'BW',
    /**
     * Belarus
     * @deprecated
     */
    By = 'BY',
    /**
     * Belize
     * @deprecated
     */
    Bz = 'BZ',
    /**
     * Canada
     * @deprecated
     */
    Ca = 'CA',
    /**
     * Cocos (Keeling) Islands
     * @deprecated
     */
    Cc = 'CC',
    /**
     * Congo-Kinshasa
     * @deprecated
     */
    Cd = 'CD',
    /**
     * Central African Republic
     * @deprecated
     */
    Cf = 'CF',
    /**
     * Congo-Brazzaville
     * @deprecated
     */
    Cg = 'CG',
    /**
     * Switzerland
     * @deprecated
     */
    Ch = 'CH',
    /**
     * Côte d’Ivoire
     * @deprecated
     */
    Ci = 'CI',
    /**
     * Cook Islands
     * @deprecated
     */
    Ck = 'CK',
    /**
     * Chile
     * @deprecated
     */
    Cl = 'CL',
    /**
     * Cameroon
     * @deprecated
     */
    Cm = 'CM',
    /**
     * China
     * @deprecated
     */
    Cn = 'CN',
    /**
     * Colombia
     * @deprecated
     */
    Co = 'CO',
    /**
     * Costa Rica
     * @deprecated
     */
    Cr = 'CR',
    /**
     * Cuba
     * @deprecated
     */
    Cu = 'CU',
    /**
     * Cape Verde
     * @deprecated
     */
    Cv = 'CV',
    /**
     * Christmas Island
     * @deprecated
     */
    Cx = 'CX',
    /**
     * Cyprus
     * @deprecated
     */
    Cy = 'CY',
    /**
     * Czech Republic
     * @deprecated
     */
    Cz = 'CZ',
    /**
     * Germany
     * @deprecated
     */
    De = 'DE',
    /**
     * Djibouti
     * @deprecated
     */
    Dj = 'DJ',
    /**
     * Denmark
     * @deprecated
     */
    Dk = 'DK',
    /**
     * Dominica
     * @deprecated
     */
    Dm = 'DM',
    /**
     * Dominican Republic
     * @deprecated
     */
    Do = 'DO',
    /**
     * Algeria
     * @deprecated
     */
    Dz = 'DZ',
    /**
     * Ecuador
     * @deprecated
     */
    Ec = 'EC',
    /**
     * Estonia
     * @deprecated
     */
    Ee = 'EE',
    /**
     * Egypt
     * @deprecated
     */
    Eg = 'EG',
    /**
     * Western Sahara
     * @deprecated
     */
    Eh = 'EH',
    /**
     * Eritrea
     * @deprecated
     */
    Er = 'ER',
    /**
     * Spain
     * @deprecated
     */
    Es = 'ES',
    /**
     * Ethiopia
     * @deprecated
     */
    Et = 'ET',
    /**
     * Finland
     * @deprecated
     */
    Fi = 'FI',
    /**
     * Fiji
     * @deprecated
     */
    Fj = 'FJ',
    /**
     * Falkland Islands
     * @deprecated
     */
    Fk = 'FK',
    /**
     * Micronesia
     * @deprecated
     */
    Fm = 'FM',
    /**
     * Faroe Islands
     * @deprecated
     */
    Fo = 'FO',
    /**
     * France
     * @deprecated
     */
    Fr = 'FR',
    /**
     * Gabon
     * @deprecated
     */
    Ga = 'GA',
    /**
     * United Kingdom
     * @deprecated
     */
    Gb = 'GB',
    /**
     * Grenada
     * @deprecated
     */
    Gd = 'GD',
    /**
     * Georgia
     * @deprecated
     */
    Ge = 'GE',
    /**
     * French Guiana
     * @deprecated
     */
    Gf = 'GF',
    /**
     * Guernsey
     * @deprecated
     */
    Gg = 'GG',
    /**
     * Ghana
     * @deprecated
     */
    Gh = 'GH',
    /**
     * Gibraltar
     * @deprecated
     */
    Gi = 'GI',
    /**
     * Greenland
     * @deprecated
     */
    Gl = 'GL',
    /**
     * Gambia
     * @deprecated
     */
    Gm = 'GM',
    /**
     * Guinea
     * @deprecated
     */
    Gn = 'GN',
    /**
     * Guadeloupe
     * @deprecated
     */
    Gp = 'GP',
    /**
     * Equatorial Guinea
     * @deprecated
     */
    Gq = 'GQ',
    /**
     * Greece
     * @deprecated
     */
    Gr = 'GR',
    /**
     * South Georgia & South Sandwich Islands
     * @deprecated
     */
    Gs = 'GS',
    /**
     * Guatemala
     * @deprecated
     */
    Gt = 'GT',
    /**
     * Guam
     * @deprecated
     */
    Gu = 'GU',
    /**
     * Guinea-Bissau
     * @deprecated
     */
    Gw = 'GW',
    /**
     * Guyana
     * @deprecated
     */
    Gy = 'GY',
    /**
     * Hong Kong SAR China
     * @deprecated
     */
    Hk = 'HK',
    /**
     * Heard &amp; McDonald Islands
     * @deprecated
     */
    Hm = 'HM',
    /**
     * Honduras
     * @deprecated
     */
    Hn = 'HN',
    /**
     * Croatia
     * @deprecated
     */
    Hr = 'HR',
    /**
     * Haiti
     * @deprecated
     */
    Ht = 'HT',
    /**
     * Hungary
     * @deprecated
     */
    Hu = 'HU',
    /**
     * Indonesia
     * @deprecated
     */
    Id = 'ID',
    /**
     * Ireland
     * @deprecated
     */
    Ie = 'IE',
    /**
     * Israel
     * @deprecated
     */
    Il = 'IL',
    /**
     * Isle of Man
     * @deprecated
     */
    Im = 'IM',
    /**
     * India
     * @deprecated
     */
    In = 'IN',
    /**
     * British Indian Ocean Territory
     * @deprecated
     */
    Io = 'IO',
    /**
     * Iraq
     * @deprecated
     */
    Iq = 'IQ',
    /**
     * Iran
     * @deprecated
     */
    Ir = 'IR',
    /**
     * Iceland
     * @deprecated
     */
    Is = 'IS',
    /**
     * Italy
     * @deprecated
     */
    It = 'IT',
    /**
     * Jersey
     * @deprecated
     */
    Je = 'JE',
    /**
     * Jamaica
     * @deprecated
     */
    Jm = 'JM',
    /**
     * Jordan
     * @deprecated
     */
    Jo = 'JO',
    /**
     * Japan
     * @deprecated
     */
    Jp = 'JP',
    /**
     * Kenya
     * @deprecated
     */
    Ke = 'KE',
    /**
     * Kyrgyzstan
     * @deprecated
     */
    Kg = 'KG',
    /**
     * Cambodia
     * @deprecated
     */
    Kh = 'KH',
    /**
     * Kiribati
     * @deprecated
     */
    Ki = 'KI',
    /**
     * Comoros
     * @deprecated
     */
    Km = 'KM',
    /**
     * St. Kitts & Nevis
     * @deprecated
     */
    Kn = 'KN',
    /**
     * North Korea
     * @deprecated
     */
    Kp = 'KP',
    /**
     * South Korea
     * @deprecated
     */
    Kr = 'KR',
    /**
     * Kuwait
     * @deprecated
     */
    Kw = 'KW',
    /**
     * Cayman Islands
     * @deprecated
     */
    Ky = 'KY',
    /**
     * Kazakhstan
     * @deprecated
     */
    Kz = 'KZ',
    /**
     * Laos
     * @deprecated
     */
    La = 'LA',
    /**
     * Lebanon
     * @deprecated
     */
    Lb = 'LB',
    /**
     * St. Lucia
     * @deprecated
     */
    Lc = 'LC',
    /**
     * Liechtenstein
     * @deprecated
     */
    Li = 'LI',
    /**
     * Sri Lanka
     * @deprecated
     */
    Lk = 'LK',
    /**
     * Liberia
     * @deprecated
     */
    Lr = 'LR',
    /**
     * Lesotho
     * @deprecated
     */
    Ls = 'LS',
    /**
     * Lithuania
     * @deprecated
     */
    Lt = 'LT',
    /**
     * Luxembourg
     * @deprecated
     */
    Lu = 'LU',
    /**
     * Latvia
     * @deprecated
     */
    Lv = 'LV',
    /**
     * Libya
     * @deprecated
     */
    Ly = 'LY',
    /**
     * Morocco
     * @deprecated
     */
    Ma = 'MA',
    /**
     * Monaco
     * @deprecated
     */
    Mc = 'MC',
    /**
     * Moldova
     * @deprecated
     */
    Md = 'MD',
    /**
     * Montenegro
     * @deprecated
     */
    Me = 'ME',
    /**
     * St. Martin
     * @deprecated
     */
    Mf = 'MF',
    /**
     * Madagascar
     * @deprecated
     */
    Mg = 'MG',
    /**
     * Marshall Islands
     * @deprecated
     */
    Mh = 'MH',
    /**
     * Macedonia
     * @deprecated
     */
    Mk = 'MK',
    /**
     * Mali
     * @deprecated
     */
    Ml = 'ML',
    /**
     * Myanmar (Burma)
     * @deprecated
     */
    Mm = 'MM',
    /**
     * Mongolia
     * @deprecated
     */
    Mn = 'MN',
    /**
     * Macau SAR China
     * @deprecated
     */
    Mo = 'MO',
    /**
     * Northern Mariana Islands
     * @deprecated
     */
    Mp = 'MP',
    /**
     * Martinique
     * @deprecated
     */
    Mq = 'MQ',
    /**
     * Mauritania
     * @deprecated
     */
    Mr = 'MR',
    /**
     * Montserrat
     * @deprecated
     */
    Ms = 'MS',
    /**
     * Malta
     * @deprecated
     */
    Mt = 'MT',
    /**
     * Mauritius
     * @deprecated
     */
    Mu = 'MU',
    /**
     * Maldives
     * @deprecated
     */
    Mv = 'MV',
    /**
     * Malawi
     * @deprecated
     */
    Mw = 'MW',
    /**
     * Mexico
     * @deprecated
     */
    Mx = 'MX',
    /**
     * Malaysia
     * @deprecated
     */
    My = 'MY',
    /**
     * Mozambique
     * @deprecated
     */
    Mz = 'MZ',
    /**
     * Namibia
     * @deprecated
     */
    Na = 'NA',
    /**
     * New Caledonia
     * @deprecated
     */
    Nc = 'NC',
    /**
     * Niger
     * @deprecated
     */
    Ne = 'NE',
    /**
     * Norfolk Island
     * @deprecated
     */
    Nf = 'NF',
    /**
     * Nigeria
     * @deprecated
     */
    Ng = 'NG',
    /**
     * Nicaragua
     * @deprecated
     */
    Ni = 'NI',
    /**
     * Netherlands
     * @deprecated
     */
    Nl = 'NL',
    /**
     * Norway
     * @deprecated
     */
    No = 'NO',
    /**
     * Nepal
     * @deprecated
     */
    Np = 'NP',
    /**
     * Nauru
     * @deprecated
     */
    Nr = 'NR',
    /**
     * Niue
     * @deprecated
     */
    Nu = 'NU',
    /**
     * New Zealand
     * @deprecated
     */
    Nz = 'NZ',
    /**
     * Oman
     * @deprecated
     */
    Om = 'OM',
    /**
     * Panama
     * @deprecated
     */
    Pa = 'PA',
    /**
     * Peru
     * @deprecated
     */
    Pe = 'PE',
    /**
     * French Polynesia
     * @deprecated
     */
    Pf = 'PF',
    /**
     * Papua New Guinea
     * @deprecated
     */
    Pg = 'PG',
    /**
     * Philippines
     * @deprecated
     */
    Ph = 'PH',
    /**
     * Pakistan
     * @deprecated
     */
    Pk = 'PK',
    /**
     * Poland
     * @deprecated
     */
    Pl = 'PL',
    /**
     * St. Pierre & Miquelon
     * @deprecated
     */
    Pm = 'PM',
    /**
     * Pitcairn Islands
     * @deprecated
     */
    Pn = 'PN',
    /**
     * Palestinian Territories
     * @deprecated
     */
    Ps = 'PS',
    /**
     * Portugal
     * @deprecated
     */
    Pt = 'PT',
    /**
     * Palau
     * @deprecated
     */
    Pw = 'PW',
    /**
     * Paraguay
     * @deprecated
     */
    Py = 'PY',
    /**
     * Qatar
     * @deprecated
     */
    Qa = 'QA',
    /**
     * Réunion
     * @deprecated
     */
    Re = 'RE',
    /**
     * Romania
     * @deprecated
     */
    Ro = 'RO',
    /**
     * Serbia
     * @deprecated
     */
    Rs = 'RS',
    /**
     * Russia
     * @deprecated
     */
    Ru = 'RU',
    /**
     * Rwanda
     * @deprecated
     */
    Rw = 'RW',
    /**
     * Saudi Arabia
     * @deprecated
     */
    Sa = 'SA',
    /**
     * Solomon Islands
     * @deprecated
     */
    Sb = 'SB',
    /**
     * Seychelles
     * @deprecated
     */
    Sc = 'SC',
    /**
     * Sudan
     * @deprecated
     */
    Sd = 'SD',
    /**
     * Sweden
     * @deprecated
     */
    Se = 'SE',
    /**
     * Singapore
     * @deprecated
     */
    Sg = 'SG',
    /**
     * St. Helena
     * @deprecated
     */
    Sh = 'SH',
    /**
     * Slovenia
     * @deprecated
     */
    Si = 'SI',
    /**
     * Svalbard & Jan Mayen
     * @deprecated
     */
    Sj = 'SJ',
    /**
     * Slovakia
     * @deprecated
     */
    Sk = 'SK',
    /**
     * Sierra Leone
     * @deprecated
     */
    Sl = 'SL',
    /**
     * San Marino
     * @deprecated
     */
    Sm = 'SM',
    /**
     * Senegal
     * @deprecated
     */
    Sn = 'SN',
    /**
     * Somalia
     * @deprecated
     */
    So = 'SO',
    /**
     * Suriname
     * @deprecated
     */
    Sr = 'SR',
    /**
     * São Tomé & Príncipe
     * @deprecated
     */
    St = 'ST',
    /**
     * El Salvador
     * @deprecated
     */
    Sv = 'SV',
    /**
     * Syria
     * @deprecated
     */
    Sy = 'SY',
    /**
     * Swaziland
     * @deprecated
     */
    Sz = 'SZ',
    /**
     * Turks & Caicos Islands
     * @deprecated
     */
    Tc = 'TC',
    /**
     * Chad
     * @deprecated
     */
    Td = 'TD',
    /**
     * French Southern Territories
     * @deprecated
     */
    Tf = 'TF',
    /**
     * Togo
     * @deprecated
     */
    Tg = 'TG',
    /**
     * Thailand
     * @deprecated
     */
    Th = 'TH',
    /**
     * Tajikistan
     * @deprecated
     */
    Tj = 'TJ',
    /**
     * Tokelau
     * @deprecated
     */
    Tk = 'TK',
    /**
     * Timor-Leste
     * @deprecated
     */
    Tl = 'TL',
    /**
     * Turkmenistan
     * @deprecated
     */
    Tm = 'TM',
    /**
     * Tunisia
     * @deprecated
     */
    Tn = 'TN',
    /**
     * Tonga
     * @deprecated
     */
    To = 'TO',
    /**
     * Turkey
     * @deprecated
     */
    Tr = 'TR',
    /**
     * Trinidad & Tobago
     * @deprecated
     */
    Tt = 'TT',
    /**
     * Tuvalu
     * @deprecated
     */
    Tv = 'TV',
    /**
     * Taiwan
     * @deprecated
     */
    Tw = 'TW',
    /**
     * Tanzania
     * @deprecated
     */
    Tz = 'TZ',
    /**
     * Ukraine
     * @deprecated
     */
    Ua = 'UA',
    /**
     * Uganda
     * @deprecated
     */
    Ug = 'UG',
    /**
     * U.S. Outlying Islands
     * @deprecated
     */
    Um = 'UM',
    /**
     * United States
     * @deprecated
     */
    Us = 'US',
    /**
     * Uruguay
     * @deprecated
     */
    Uy = 'UY',
    /**
     * Uzbekistan
     * @deprecated
     */
    Uz = 'UZ',
    /**
     * Vatican City
     * @deprecated
     */
    Va = 'VA',
    /**
     * St. Vincent & Grenadines
     * @deprecated
     */
    Vc = 'VC',
    /**
     * Venezuela
     * @deprecated
     */
    Ve = 'VE',
    /**
     * British Virgin Islands
     * @deprecated
     */
    Vg = 'VG',
    /**
     * U.S. Virgin Islands
     * @deprecated
     */
    Vi = 'VI',
    /**
     * Vietnam
     * @deprecated
     */
    Vn = 'VN',
    /**
     * Vanuatu
     * @deprecated
     */
    Vu = 'VU',
    /**
     * Wallis & Futuna
     * @deprecated
     */
    Wf = 'WF',
    /**
     * Samoa
     * @deprecated
     */
    Ws = 'WS',
    /**
     * Yemen
     * @deprecated
     */
    Ye = 'YE',
    /**
     * Mayotte
     * @deprecated
     */
    Yt = 'YT',
    /**
     * South Africa
     * @deprecated
     */
    Za = 'ZA',
    /**
     * Zambia
     * @deprecated
     */
    Zm = 'ZM',
    /**
     * Zimbabwe
     * @deprecated
     */
    Zw = 'ZW'
  }

export const CreateCustomerCartDocument = gql`
    query createCustomerCart {
  customerCart {
    id
  }
}
    `;
export const CreateGuestCartDocument = gql`
    mutation createGuestCart {
  id: createEmptyCart
}
    `;
export const GetCartDocument = gql`
    query getCart($cartId: String!) {
  cart(cart_id: $cartId) {
    id
    items {
      id
      quantity
      product {
        id
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
        url_key
      }
    }
    prices {
      discounts {
        amount {
          currency
          value
        }
        label
      }
      grand_total {
        currency
        value
      }
      subtotal_excluding_tax {
        currency
        value
      }
      subtotal_including_tax {
        currency
        value
      }
    }
  }
}
    `;
export const AddProductToCartDocument = gql`
    mutation addProductToCart($cartId: String!, $cartItem: CartItemInput!) {
  addProductsToCart(cartId: $cartId, cartItems: [$cartItem]) {
    cart {
      items {
        id
        product {
          sku
        }
        quantity
      }
    }
  }
}
    `;
export const GetProductsDocument = gql`
    query getProducts($sku: String!) {
  products(filter: {sku: {eq: $sku}}) {
    items {
      __typename
      uid
      name
      description {
        html
      }
      sku
      stock_status
      only_x_left_in_stock
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      image {
        url
      }
      url_key
      type_id
      categories {
        id
        name
        url_key
        url_path
        canonical_url
        breadcrumbs {
          category_id
          category_level
          category_name
          category_uid
          category_url_key
          category_url_path
        }
      }
      rating_summary
      review_count
      reviews {
        items {
          summary
          average_rating
          nickname
          text
          created_at
        }
      }
      ... on ConfigurableProduct {
        configurable_options {
          attribute_code
          attribute_id
          label
          position
          values {
            uid
            label
          }
        }
      }
    }
  }
}
    `;
export const GetCategoriesDocument = gql`
    query getCategories($urlKey: String!) {
  categories(filters: {url_key: {eq: $urlKey}}) {
    items {
      id
      name
      url_key
      description
      image
    }
  }
}
    `;
export const GetCategoryProductsDocument = gql`
    query getCategoryProducts($id: Int!) {
  category(id: $id) {
    products {
      items {
        id
        uid
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
        url_key
      }
    }
  }
}
    `;
export const SearchProductsDocument = gql`
    query searchProducts($query: String!, $pageSize: Int!, $currentPage: Int!, $sort: ProductAttributeSortInput!) {
  products(
    search: $query
    pageSize: $pageSize
    currentPage: $currentPage
    sort: $sort
  ) {
    total_count
    items {
      id
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      image {
        url
      }
      url_key
    }
  }
}
    `;
export const SetShippingAddressOnCartDocument = gql`
    mutation setShippingAddressOnCart($cartId: String!, $address: ShippingAddressInput!) {
  setShippingAddressesOnCart(
    input: {cart_id: $cartId, shipping_addresses: [$address]}
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        street
        city
        postcode
        country {
          code
        }
        telephone
      }
    }
  }
}
    `;
export const GetCartShippingAddressesDocument = gql`
    query getCartShippingAddresses($cartId: String!) {
  cart(cart_id: $cartId) {
    shipping_addresses {
      firstname
      lastname
      street
      city
      postcode
      country {
        code
        label
      }
      telephone
      selected_shipping_method {
        carrier_code
        method_code
      }
    }
  }
}
    `;
export const GetAvailableShippingMethodsDocument = gql`
    query getAvailableShippingMethods($cartId: String!) {
  cart(cart_id: $cartId) {
    shipping_addresses {
      selected_shipping_method {
        carrier_code
        method_code
      }
      available_shipping_methods {
        available
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
  }
}
    `;
export const GetCartBillingAddressDocument = gql`
    query getCartBillingAddress($cartId: String!) {
  cart(cart_id: $cartId) {
    billing_address {
      firstname
      lastname
      street
      city
      postcode
      country {
        code
        label
      }
      telephone
    }
  }
}
    `;
export const SetShippingMethodsOnCartDocument = gql`
    mutation setShippingMethodsOnCart($cartId: String!, $shippingMethods: [ShippingMethodInput]!) {
  setShippingMethodsOnCart(
    input: {cart_id: $cartId, shipping_methods: $shippingMethods}
  ) {
    cart {
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          method_code
          carrier_title
          method_title
        }
      }
    }
  }
}
    `;
export const SetBillingAddressOnCartDocument = gql`
    mutation setBillingAddressOnCart($cartId: String!, $address: BillingAddressInput!) {
  setBillingAddressOnCart(input: {cart_id: $cartId, billing_address: $address}) {
    cart {
      billing_address {
        firstname
        lastname
        street
        city
        postcode
        country {
          code
        }
        telephone
      }
    }
  }
}
    `;
export const GetAvailablePaymentMethodsDocument = gql`
    query getAvailablePaymentMethods($cartId: String!) {
  cart(cart_id: $cartId) {
    selected_payment_method {
      code
    }
    available_payment_methods {
      code
      title
    }
  }
}
    `;
export const SetPaymentMethodOnCartDocument = gql`
    mutation setPaymentMethodOnCart($cartId: String!, $paymentMethod: PaymentMethodInput!) {
  setPaymentMethodOnCart(
    input: {cart_id: $cartId, payment_method: $paymentMethod}
  ) {
    cart {
      selected_payment_method {
        code
        title
      }
    }
  }
}
    `;
export const PlaceOrderDocument = gql`
    mutation placeOrder($cartId: String!) {
  placeOrder(input: {cart_id: $cartId}) {
    order {
      order_number
      order_id
    }
  }
}
    `;
export const SetGuestEmailOnCartDocument = gql`
    mutation setGuestEmailOnCart($cartId: String!, $email: String!) {
  setGuestEmailOnCart(input: {cart_id: $cartId, email: $email}) {
    cart {
      email
    }
  }
}
    `;
export const GetCmsPageDocument = gql`
    query getCmsPage($slug: String!) {
  cmsPage(identifier: $slug) {
    title
    content
  }
}
    `;
export const GetCustomerDocument = gql`
    query getCustomer {
  customer {
    firstname
    lastname
    email
    allow_remote_shopping_assistance
  }
}
    `;
export const RevokeCustomerTokenDocument = gql`
    mutation revokeCustomerToken {
  revokeCustomerToken {
    result
  }
}
    `;
export const GenerateCustomerTokenDocument = gql`
    mutation generateCustomerToken($email: String!, $password: String!) {
  customer: generateCustomerToken(email: $email, password: $password) {
    token
  }
}
    `;
export const RequestPasswordResetEmailDocument = gql`
    mutation requestPasswordResetEmail($email: String!) {
  result: requestPasswordResetEmail(email: $email)
}
    `;
export const CreateCustomerDocument = gql`
    mutation createCustomer($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
  createCustomer(
    input: {firstname: $firstname, lastname: $lastname, email: $email, password: $password}
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
    `;
export const GetCustomerAddressesDocument = gql`
    query getCustomerAddresses {
  customer {
    addresses {
      id
      firstname
      lastname
      street
      company
      city
      postcode
      country_code
      telephone
      default_shipping
      default_billing
    }
  }
}
    `;
export const GetCustomerOrdersDocument = gql`
    query getCustomerOrders {
  customer {
    orders {
      items {
        id
        order_number
        created_at
        status
        total {
          grand_total {
            currency
            value
          }
        }
      }
    }
  }
}
    `;
export const IsCustomerSubscribedToNewsletterDocument = gql`
    query isCustomerSubscribedToNewsletter {
  customer {
    is_subscribed
  }
}
    `;
export const SetCustomerNewsletterSubscriptionDocument = gql`
    mutation setCustomerNewsletterSubscription($isSubscribed: Boolean!) {
  updateCustomer(input: {is_subscribed: $isSubscribed}) {
    customer {
      is_subscribed
    }
  }
}
    `;
export const UpdateCustomerInformationDocument = gql`
    mutation updateCustomerInformation($firstname: String!, $lastname: String!, $email: String!, $currentPassword: String!, $newPassword: String!, $updateCustomerEmail: Boolean!, $updateCustomerPassword: Boolean!) {
  updateCustomer(input: {firstname: $firstname, lastname: $lastname}) {
    customer {
      firstname
      lastname
    }
  }
  updateCustomerEmail(email: $email, password: $currentPassword) @include(if: $updateCustomerEmail) {
    customer {
      email
    }
  }
  changeCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) @include(if: $updateCustomerPassword) {
    id
    email
  }
}
    `;
export const SubscribeToNewsletterDocument = gql`
    mutation subscribeToNewsletter($email: String!) {
  subscribeEmailToNewsletter(email: $email) {
    status
  }
}
    `;
export const GetStoreConfigDocument = gql`
    query getStoreConfig {
  storeConfig {
    cms_home_page
    default_title
    default_description
    default_keywords
    copyright
    header_logo_src
    logo_width
    logo_height
  }
}
    `;
export const GetCountriesDocument = gql`
    query getCountries {
  countries {
    id
    full_name_locale
    available_regions {
      id
      name
      code
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createCustomerCart(variables?: CreateCustomerCartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCustomerCartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCustomerCartQuery>(CreateCustomerCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCustomerCart', 'query', variables);
    },
    createGuestCart(variables?: CreateGuestCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGuestCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGuestCartMutation>(CreateGuestCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGuestCart', 'mutation', variables);
    },
    getCart(variables: GetCartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartQuery>(GetCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCart', 'query', variables);
    },
    addProductToCart(variables: AddProductToCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddProductToCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddProductToCartMutation>(AddProductToCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addProductToCart', 'mutation', variables);
    },
    getProducts(variables: GetProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query', variables);
    },
    getCategories(variables: GetCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query', variables);
    },
    getCategoryProducts(variables: GetCategoryProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoryProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryProductsQuery>(GetCategoryProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryProducts', 'query', variables);
    },
    searchProducts(variables: SearchProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SearchProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchProductsQuery>(SearchProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchProducts', 'query', variables);
    },
    setShippingAddressOnCart(variables: SetShippingAddressOnCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetShippingAddressOnCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetShippingAddressOnCartMutation>(SetShippingAddressOnCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setShippingAddressOnCart', 'mutation', variables);
    },
    getCartShippingAddresses(variables: GetCartShippingAddressesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCartShippingAddressesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartShippingAddressesQuery>(GetCartShippingAddressesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCartShippingAddresses', 'query', variables);
    },
    getAvailableShippingMethods(variables: GetAvailableShippingMethodsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAvailableShippingMethodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAvailableShippingMethodsQuery>(GetAvailableShippingMethodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAvailableShippingMethods', 'query', variables);
    },
    getCartBillingAddress(variables: GetCartBillingAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCartBillingAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartBillingAddressQuery>(GetCartBillingAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCartBillingAddress', 'query', variables);
    },
    setShippingMethodsOnCart(variables: SetShippingMethodsOnCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetShippingMethodsOnCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetShippingMethodsOnCartMutation>(SetShippingMethodsOnCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setShippingMethodsOnCart', 'mutation', variables);
    },
    setBillingAddressOnCart(variables: SetBillingAddressOnCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetBillingAddressOnCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetBillingAddressOnCartMutation>(SetBillingAddressOnCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setBillingAddressOnCart', 'mutation', variables);
    },
    getAvailablePaymentMethods(variables: GetAvailablePaymentMethodsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAvailablePaymentMethodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAvailablePaymentMethodsQuery>(GetAvailablePaymentMethodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAvailablePaymentMethods', 'query', variables);
    },
    setPaymentMethodOnCart(variables: SetPaymentMethodOnCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetPaymentMethodOnCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetPaymentMethodOnCartMutation>(SetPaymentMethodOnCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setPaymentMethodOnCart', 'mutation', variables);
    },
    placeOrder(variables: PlaceOrderMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlaceOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlaceOrderMutation>(PlaceOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'placeOrder', 'mutation', variables);
    },
    setGuestEmailOnCart(variables: SetGuestEmailOnCartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetGuestEmailOnCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetGuestEmailOnCartMutation>(SetGuestEmailOnCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setGuestEmailOnCart', 'mutation', variables);
    },
    getCmsPage(variables: GetCmsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCmsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCmsPageQuery>(GetCmsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCmsPage', 'query', variables);
    },
    getCustomer(variables?: GetCustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomerQuery>(GetCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomer', 'query', variables);
    },
    revokeCustomerToken(variables?: RevokeCustomerTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RevokeCustomerTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RevokeCustomerTokenMutation>(RevokeCustomerTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'revokeCustomerToken', 'mutation', variables);
    },
    generateCustomerToken(variables: GenerateCustomerTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GenerateCustomerTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateCustomerTokenMutation>(GenerateCustomerTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateCustomerToken', 'mutation', variables);
    },
    requestPasswordResetEmail(variables: RequestPasswordResetEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RequestPasswordResetEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RequestPasswordResetEmailMutation>(RequestPasswordResetEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'requestPasswordResetEmail', 'mutation', variables);
    },
    createCustomer(variables: CreateCustomerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCustomerMutation>(CreateCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCustomer', 'mutation', variables);
    },
    getCustomerAddresses(variables?: GetCustomerAddressesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomerAddressesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomerAddressesQuery>(GetCustomerAddressesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomerAddresses', 'query', variables);
    },
    getCustomerOrders(variables?: GetCustomerOrdersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomerOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomerOrdersQuery>(GetCustomerOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomerOrders', 'query', variables);
    },
    isCustomerSubscribedToNewsletter(variables?: IsCustomerSubscribedToNewsletterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IsCustomerSubscribedToNewsletterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsCustomerSubscribedToNewsletterQuery>(IsCustomerSubscribedToNewsletterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isCustomerSubscribedToNewsletter', 'query', variables);
    },
    setCustomerNewsletterSubscription(variables: SetCustomerNewsletterSubscriptionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetCustomerNewsletterSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetCustomerNewsletterSubscriptionMutation>(SetCustomerNewsletterSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setCustomerNewsletterSubscription', 'mutation', variables);
    },
    updateCustomerInformation(variables: UpdateCustomerInformationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateCustomerInformationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerInformationMutation>(UpdateCustomerInformationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCustomerInformation', 'mutation', variables);
    },
    subscribeToNewsletter(variables: SubscribeToNewsletterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SubscribeToNewsletterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubscribeToNewsletterMutation>(SubscribeToNewsletterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'subscribeToNewsletter', 'mutation', variables);
    },
    getStoreConfig(variables?: GetStoreConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStoreConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStoreConfigQuery>(GetStoreConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStoreConfig', 'query', variables);
    },
    getCountries(variables?: GetCountriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCountriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCountriesQuery>(GetCountriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCountries', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
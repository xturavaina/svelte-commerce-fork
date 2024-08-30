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

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
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

export type AdyenPaymentMethodIcon = {
  __typename?: 'AdyenPaymentMethodIcon';
  /** Height of the icon in pixels. */
  height: Maybe<Scalars['Int']['output']>;
  /** URL of the icon. */
  url: Maybe<Scalars['String']['output']>;
  /** Width of the icon in pixels. */
  width: Maybe<Scalars['Int']['output']>;
};

export type AdyenPaymentMethods = {
  __typename?: 'AdyenPaymentMethods';
  /** Payment method's additional details. */
  paymentMethodsExtraDetails: Maybe<Array<Maybe<AdyenPaymentMethodsExtraDetails>>>;
  /** API response from Adyen with payment methods. */
  paymentMethodsResponse: Maybe<AdyenPaymentMethodsResponse>;
};

export type AdyenPaymentMethodsArray = {
  __typename?: 'AdyenPaymentMethodsArray';
  /** Brand for the selected gift card. For example: plastix, hmclub. */
  brand: Maybe<Scalars['String']['output']>;
  /** List of possible brands. For example: visa, mc. */
  brands: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The configuration of the payment method. */
  configuration: Maybe<AdyenPaymentMethodsConfiguration>;
  /** All input details to be provided to complete the payment with this payment method. */
  details: Maybe<Array<Maybe<AdyenPaymentMethodsDetails>>>;
  /** Payment method issuer list. */
  issuers: Maybe<Array<Maybe<AdyenPaymentMethodsIssuers>>>;
  /** The displayable name of this payment method. */
  name: Maybe<Scalars['String']['output']>;
  /** The unique payment method code. */
  type: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsConfiguration = {
  __typename?: 'AdyenPaymentMethodsConfiguration';
  /** Name of the merchant for Google Pay. */
  gatewayMerchantId: Maybe<Scalars['String']['output']>;
  /** ID of the merchant. */
  merchantId: Maybe<Scalars['String']['output']>;
  /** Name of the merchant. */
  merchantName: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsDetails = {
  __typename?: 'AdyenPaymentMethodsDetails';
  /** The items to choose from in case that the payment method includes a selection list. */
  items: Maybe<Array<Maybe<AdyenPaymentMethodsDetailsItems>>>;
  /** The value to provide in the result. */
  key: Maybe<Scalars['String']['output']>;
  /** True if this input is optional. */
  optional: Maybe<Scalars['String']['output']>;
  /** The type of the required input. */
  type: Maybe<Scalars['String']['output']>;
  /** The value can be pre-filled, if available. */
  value: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsDetailsItems = {
  __typename?: 'AdyenPaymentMethodsDetailsItems';
  /** The value to provide in the result. */
  id: Maybe<Scalars['String']['output']>;
  /** The display name. */
  name: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsExtraDetails = {
  __typename?: 'AdyenPaymentMethodsExtraDetails';
  /** Extra configuration settings. */
  configuration: Maybe<AdyenPaymentMethodsExtraDetailsConfiguration>;
  /** Icon for the payment method. */
  icon: Maybe<AdyenPaymentMethodIcon>;
  /** True if the payment method is Open Invoice. */
  isOpenInvoice: Maybe<Scalars['Boolean']['output']>;
  /** The unique payment method code. */
  type: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsExtraDetailsConfiguration = {
  __typename?: 'AdyenPaymentMethodsExtraDetailsConfiguration';
  /** Current order amount in minor units. */
  amount: Maybe<Money>;
  /** Current order currency. */
  currency: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsIssuers = {
  __typename?: 'AdyenPaymentMethodsIssuers';
  /** Issuer ID. */
  id: Maybe<Scalars['String']['output']>;
  /** Issuer name. */
  name: Maybe<Scalars['String']['output']>;
};

export type AdyenPaymentMethodsResponse = {
  __typename?: 'AdyenPaymentMethodsResponse';
  paymentMethods: Maybe<Array<Maybe<AdyenPaymentMethodsArray>>>;
  storedPaymentMethods: Maybe<Array<Maybe<AdyenStoredPaymentMethodsArray>>>;
};

export type AdyenPaymentStatus = {
  __typename?: 'AdyenPaymentStatus';
  /** Object containing information about the payment's next step. */
  action: Maybe<Scalars['String']['output']>;
  /** Additional data required for the next step in the payment process. */
  additionalData: Maybe<Scalars['String']['output']>;
  /** If True, no further action is required and customer should be redirect to success page. */
  isFinal: Maybe<Scalars['Boolean']['output']>;
  /** Current state of the order in Adyen. */
  resultCode: Maybe<Scalars['String']['output']>;
};

export type AdyenStoredPaymentMethodsArray = {
  __typename?: 'AdyenStoredPaymentMethodsArray';
  /** The brand of the card. */
  brand: Maybe<Scalars['String']['output']>;
  /** The month the card expires. */
  expiryMonth: Maybe<Scalars['String']['output']>;
  /** The year the card expires. */
  expiryYear: Maybe<Scalars['String']['output']>;
  /** The unique payment method code. */
  holderName: Maybe<Scalars['String']['output']>;
  /** The IBAN of the bank account. */
  iban: Maybe<Scalars['String']['output']>;
  /** A unique identifier of this stored payment method. */
  id: Maybe<Scalars['String']['output']>;
  /** The last four digits of the PAN. */
  lastFour: Maybe<Scalars['String']['output']>;
  /** The display name of the stored payment method. */
  name: Maybe<Scalars['String']['output']>;
  /** Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa. This contains either the Mastercard Trace ID or the Visa Transaction ID. */
  networkTxReference: Maybe<Scalars['String']['output']>;
  /** The name of the bank account holder. */
  ownerName: Maybe<Scalars['String']['output']>;
  /** The shopper’s email address. */
  shopperEmail: Maybe<Scalars['String']['output']>;
  /** The supported shopper interactions for this stored payment method. */
  supportedShopperInteractions: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type of payment method. */
  type: Maybe<Scalars['String']['output']>;
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  amshopby_filter_data: Maybe<AmShopbyFilterData>;
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output'];
  /** The number of options in the aggregation group. */
  count: Maybe<Scalars['Int']['output']>;
  /** The aggregation display name. */
  label: Maybe<Scalars['String']['output']>;
  /** Array of options for the aggregation. */
  options: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position: Maybe<Scalars['Int']['output']>;
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** Bottom CMS Block */
  bottom_cms_block_id: Maybe<Scalars['Int']['output']>;
  /** The number of items that match the aggregation option. */
  count: Maybe<Scalars['Int']['output']>;
  /** Option Description */
  description: Maybe<Scalars['String']['output']>;
  /** Filter Code */
  filter_code: Maybe<Scalars['String']['output']>;
  /** Option Image */
  image: Maybe<Scalars['String']['output']>;
  /** Is Featured or Show in Brand Slider */
  is_featured: Maybe<Scalars['Boolean']['output']>;
  /** The display label for an aggregation option. */
  label: Maybe<Scalars['String']['output']>;
  /** Meta Description */
  meta_description: Maybe<Scalars['String']['output']>;
  /** Meta Keywords */
  meta_keywords: Maybe<Scalars['String']['output']>;
  /** Meta Title */
  meta_title: Maybe<Scalars['String']['output']>;
  /** Short Description */
  short_description: Maybe<Scalars['String']['output']>;
  /** Small Image */
  slider_image: Maybe<Scalars['String']['output']>;
  /** Position in Slider */
  slider_position: Maybe<Scalars['Int']['output']>;
  /** Small Image Alt */
  small_image_alt: Maybe<Scalars['String']['output']>;
  /** Option Title */
  title: Maybe<Scalars['String']['output']>;
  /** Top CMS Block */
  top_cms_block_id: Maybe<Scalars['Int']['output']>;
  /** URL Alias */
  url_alias: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

export type AmShopbyCustomFilterTypeInput = {
  /** Rating Value */
  eq?: InputMaybe<Scalars['Int']['input']>;
};

export type AmShopbyFilterData = {
  __typename?: 'AmShopbyFilterData';
  /** Add From-To Widget */
  add_from_to_widget: Maybe<Scalars['Boolean']['output']>;
  /** Show Only when Any Option of Attributes is Selected */
  attributes_filter: Maybe<Scalars['String']['output']>;
  /** Show Only if the Following Option is Selected */
  attributes_options_filter: Maybe<Scalars['String']['output']>;
  /** Show in the Block */
  block_position: Maybe<Scalars['Int']['output']>;
  /** Categories Filter */
  categories_filter: Maybe<Scalars['String']['output']>;
  /** Category Tree Depth */
  category_tree_depth: Maybe<Scalars['Int']['output']>;
  /** Category Tree Display Mode */
  category_tree_display_mode: Maybe<Scalars['Int']['output']>;
  /** Display Mode */
  display_mode: Maybe<Scalars['Int']['output']>;
  /** Display Mode */
  display_mode_label: Maybe<Scalars['String']['output']>;
  /** Filter Code */
  filter_code: Maybe<Scalars['String']['output']>;
  /** Allow Google to FOLLOW Links on the Category Page with the Filter Applied */
  follow_mode: Maybe<Scalars['Int']['output']>;
  /** Allow Google to INDEX the Category Page with the Filter Applied */
  index_mode: Maybe<Scalars['Int']['output']>;
  /** Expand */
  is_expanded: Maybe<Scalars['Int']['output']>;
  /** Allow Multiselect */
  is_multiselect: Maybe<Scalars['Boolean']['output']>;
  /** Generate SEO URL */
  is_seo_significant: Maybe<Scalars['Boolean']['output']>;
  /** Show Search Box */
  is_show_search_box: Maybe<Scalars['Boolean']['output']>;
  /** Tooltips Enabled */
  is_tooltips_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Multiple Values Logic */
  is_use_and_logic: Maybe<Scalars['Boolean']['output']>;
  /** Show the searchbox if the number of options more than */
  limit_options_show_search_box: Maybe<Scalars['Int']['output']>;
  /** Number of Unfolded Options */
  number_unfolded_options: Maybe<Scalars['Int']['output']>;
  /** Position */
  position: Maybe<Scalars['Int']['output']>;
  /** Position Label */
  position_label: Maybe<Scalars['Int']['output']>;
  /** Add rel='nofollow' to Filter Links */
  rel_nofollow: Maybe<Scalars['Int']['output']>;
  /** Render All Categories Tree */
  render_all_categories_tree: Maybe<Scalars['Boolean']['output']>;
  /** Render Categories Level */
  render_categories_level: Maybe<Scalars['Int']['output']>;
  /** Show Icon on the Product Page */
  show_icons_on_product: Maybe<Scalars['Boolean']['output']>;
  /** Show Product Quantities */
  show_product_quantities: Maybe<Scalars['Int']['output']>;
  /** Position in Sidebar */
  side_position: Maybe<Scalars['Int']['output']>;
  /** Maximum Slider Value */
  slider_max: Maybe<Scalars['Float']['output']>;
  /** Minimum Slider Value */
  slider_min: Maybe<Scalars['Float']['output']>;
  /** Slider Step */
  slider_step: Maybe<Scalars['Float']['output']>;
  /** Sort Options By */
  sort_options_by: Maybe<Scalars['Int']['output']>;
  /** Expand Subcategories */
  subcategories_expand: Maybe<Scalars['Int']['output']>;
  /** Subcategories View */
  subcategories_view: Maybe<Scalars['Int']['output']>;
  /** Tooltip */
  tooltip: Maybe<Scalars['String']['output']>;
  /** Tooltip Image */
  tooltips_image: Maybe<Scalars['String']['output']>;
  /** Position in Top */
  top_position: Maybe<Scalars['Int']['output']>;
  /** Unit Label */
  units_label: Maybe<Scalars['String']['output']>;
  /** Measure Units */
  units_label_use_currency_symbol: Maybe<Scalars['Int']['output']>;
  /** Visible in Categories */
  visible_in_categories: Maybe<Scalars['String']['output']>;
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output'];
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input'];
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  /** The cart after applying a coupon. */
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']['input'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']['input'];
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list. */
  compare_list: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output'];
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code: Maybe<Scalars['String']['output']>;
  /** Attribute options list. */
  attribute_options: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  input_type: Maybe<Scalars['String']['output']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties: Maybe<StorefrontProperties>;
};

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']['input']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Defines an attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption';
  /** The label assigned to the attribute option. */
  label: Maybe<Scalars['String']['output']>;
  /** The attribute option value. */
  value: Maybe<Scalars['String']['output']>;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** Describes an error condition. */
  error_message: Maybe<Scalars['String']['output']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code: Maybe<Scalars['String']['output']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title: Maybe<Scalars['String']['output']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

export enum BatchMutationStatus {
  /** @deprecated  */
  Failure = 'FAILURE',
  /** @deprecated  */
  MixedResults = 'MIXED_RESULTS',
  /** @deprecated  */
  Success = 'SUCCESS'
}

export type BestsellersProductOutput = {
  __typename?: 'BestsellersProductOutput';
  /** Currency */
  currency: Maybe<Scalars['String']['output']>;
  /** Period. */
  period: Maybe<Scalars['String']['output']>;
  /** Product ID */
  product_id: Maybe<Scalars['String']['output']>;
  /** Product Image URL */
  product_image_url: Maybe<Scalars['String']['output']>;
  /** Product Name */
  product_name: Maybe<Scalars['String']['output']>;
  /** Product Price */
  product_price: Maybe<Scalars['String']['output']>;
  /** Product SKU */
  product_sku: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url: Maybe<Scalars['String']['output']>;
  /** Order Quantity. */
  qty_ordered: Maybe<Scalars['Int']['output']>;
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

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>;
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

/** Brand info */
export type Brand = {
  __typename?: 'Brand';
  /** Brand image alt. */
  alt: Maybe<Scalars['String']['output']>;
  /** Brand Id. */
  brandId: Maybe<Scalars['Int']['output']>;
  /** Brand product count. */
  cnt: Maybe<Scalars['Int']['output']>;
  /** Brand description. */
  description: Maybe<Scalars['String']['output']>;
  /** Brand image. */
  image: Maybe<Scalars['String']['output']>;
  /** Brand image. */
  img: Maybe<Scalars['String']['output']>;
  /** Brand label. */
  label: Maybe<Scalars['String']['output']>;
  /** Brand list letter. */
  letter: Maybe<Scalars['String']['output']>;
  /** Brand short description. */
  short_description: Maybe<Scalars['String']['output']>;
  /** Brand url. */
  url: Maybe<Scalars['String']['output']>;
};

/** Brand info */
export type BrandForSlider = {
  __typename?: 'BrandForSlider';
  /** Brand image alt. */
  alt: Maybe<Scalars['String']['output']>;
  /** Brand Id. */
  brandId: Maybe<Scalars['Int']['output']>;
  /** Brand image. */
  img: Maybe<Scalars['String']['output']>;
  /** Brand label. */
  label: Maybe<Scalars['String']['output']>;
  /** Brand position. */
  position: Maybe<Scalars['String']['output']>;
  /** Brand url. */
  url: Maybe<Scalars['String']['output']>;
};

export type BrandList = {
  __typename?: 'BrandList';
  /** All letters. */
  all_letters: Maybe<Scalars['String']['output']>;
  /** Brand attribute. */
  brand_attribute: Maybe<Attribute>;
  /** Display zero. */
  display_zero: Maybe<Scalars['Boolean']['output']>;
  /** Filter display all. */
  filter_display_all: Maybe<Scalars['Boolean']['output']>;
  /** Brand image height. */
  image_height: Maybe<Scalars['Float']['output']>;
  /** Brand image width. */
  image_width: Maybe<Scalars['Float']['output']>;
  /** Brands. */
  items: Maybe<Array<Maybe<Brand>>>;
  /** Show count. */
  show_count: Maybe<Scalars['Boolean']['output']>;
  /** Show filter. */
  show_filter: Maybe<Scalars['Boolean']['output']>;
  /** Show images. */
  show_images: Maybe<Scalars['Boolean']['output']>;
  /** Show search. */
  show_search: Maybe<Scalars['Boolean']['output']>;
};

export type BrandSlider = {
  __typename?: 'BrandSlider';
  /** Autoplay. */
  autoplay: Maybe<Scalars['Boolean']['output']>;
  /** Autoplay delay. */
  autoplay_delay: Maybe<Scalars['Int']['output']>;
  /** Show buttons. */
  buttons_show: Maybe<Scalars['Boolean']['output']>;
  /** Image height. */
  image_height: Maybe<Scalars['Float']['output']>;
  /** Image width. */
  image_width: Maybe<Scalars['Float']['output']>;
  /** Infinity loop. */
  infinity_loop: Maybe<Scalars['Boolean']['output']>;
  /** Brands. */
  items: Maybe<Array<Maybe<BrandForSlider>>>;
  /** Brands number. */
  items_number: Maybe<Scalars['Int']['output']>;
  /** Clickable pagination. */
  pagination_clickable: Maybe<Scalars['Boolean']['output']>;
  /** Show pagination. */
  pagination_show: Maybe<Scalars['Boolean']['output']>;
  /** Show label. */
  show_label: Maybe<Scalars['Boolean']['output']>;
  /** Simulate touch. */
  simulate_touch: Maybe<Scalars['Boolean']['output']>;
  /** Slider header color. */
  slider_header_color: Maybe<Scalars['String']['output']>;
  /** Slider title. */
  slider_title: Maybe<Scalars['String']['output']>;
  /** Slider title color. */
  slider_title_color: Maybe<Scalars['String']['output']>;
  /** Slider width. */
  slider_width: Maybe<Scalars['Float']['output']>;
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id: Maybe<Scalars['Int']['output']>;
  /** The category level. */
  category_level: Maybe<Scalars['Int']['output']>;
  /** The display name of the category. */
  category_name: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output'];
  /** The URL key of the category. */
  category_url_key: Maybe<Scalars['String']['output']>;
  /** The URL path of the category. */
  category_url_path: Maybe<Scalars['String']['output']>;
};

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** An array of additional options for this bundle item. */
  options: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position: Maybe<Scalars['Int']['output']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the bundle product. */
  sku: Maybe<Scalars['String']['output']>;
  /** The display name of the item. */
  title: Maybe<Scalars['String']['output']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `BundleItem` object. */
  uid: Maybe<Scalars['ID']['output']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity: Maybe<Scalars['Boolean']['output']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether this option is the default option. */
  is_default: Maybe<Scalars['Boolean']['output']>;
  /** The text that identifies the bundled item option. */
  label: Maybe<Scalars['String']['output']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position: Maybe<Scalars['Int']['output']>;
  /** The price of the selected option. */
  price: Maybe<Scalars['Float']['output']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty: Maybe<Scalars['Float']['output']>;
  /** The quantity of this specific bundle item. */
  quantity: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output'];
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** An array containing information about individual bundle items. */
  items: Maybe<Array<Maybe<BundleItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view: Maybe<PriceViewEnum>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** An array containing information about the selected bundle items. */
  bundle_options: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  __typename?: 'Cart';
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of available payment methods. */
  available_payment_methods: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  /** The billing address assigned to the cart. */
  billing_address: Maybe<BillingCartAddress>;
  /** The email address of the guest or customer. */
  email: Maybe<Scalars['String']['output']>;
  /** The entered gift message for the cart */
  gift_message: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output'];
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output'];
  /** An array of products that have been added to the cart. */
  items: Maybe<Array<Maybe<CartItemInterface>>>;
  /** Pricing details for the quote. */
  prices: Maybe<CartPrices>;
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method: Maybe<SelectedPaymentMethod>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output'];
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  /** The country code. */
  code: Scalars['String']['output'];
  /** The display label for the country. */
  label: Scalars['String']['output'];
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

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>;
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  /** The state or province code. */
  code: Maybe<Scalars['String']['output']>;
  /** The display label for the region. */
  label: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>;
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>;
};

export type CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String']['output'];
};

export enum CartItemErrorType {
  /** @deprecated  */
  ItemIncrements = 'ITEM_INCREMENTS',
  /** @deprecated  */
  ItemQty = 'ITEM_QTY',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

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

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount: Maybe<Money>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output'];
  /** A price value. */
  value: Scalars['Float']['output'];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  __typename?: 'CartPrices';
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount: Maybe<CartDiscount>;
  /** An array containing all discounts applied to the cart. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total: Maybe<Money>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String']['output'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  am_exclude_from_filter: Maybe<Scalars['Int']['output']>;
  available_sort_by: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  category_abbrv: Maybe<Scalars['String']['output']>;
  category_nofollow: Maybe<Scalars['Int']['output']>;
  category_noindex: Maybe<Scalars['Int']['output']>;
  children_count: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  custom_layout_update_file: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description: Maybe<Scalars['String']['output']>;
  display_mode: Maybe<Scalars['String']['output']>;
  filter_price_range: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['String']['output']>;
  include_in_menu: Maybe<Scalars['Int']['output']>;
  is_anchor: Maybe<Scalars['Int']['output']>;
  landing_page: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level: Maybe<Scalars['Int']['output']>;
  meta_description: Maybe<Scalars['String']['output']>;
  meta_keywords: Maybe<Scalars['String']['output']>;
  meta_title: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products: Maybe<CategoryProducts>;
  thumbnail: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
};


/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ProductAttributeSortInput>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  am_exclude_from_filter: Maybe<Scalars['Int']['output']>;
  available_sort_by: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An array of breadcrumb items. */
  breadcrumbs: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  category_abbrv: Maybe<Scalars['String']['output']>;
  category_nofollow: Maybe<Scalars['Int']['output']>;
  category_noindex: Maybe<Scalars['Int']['output']>;
  /** A tree of child categories. */
  children: Maybe<Array<Maybe<CategoryTree>>>;
  children_count: Maybe<Scalars['String']['output']>;
  /** Contains a category CMS block. */
  cms_block: Maybe<CmsBlock>;
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  custom_layout_update_file: Maybe<Scalars['String']['output']>;
  /** The attribute to use for sorting. */
  default_sort_by: Maybe<Scalars['String']['output']>;
  /** An optional description of the category. */
  description: Maybe<Scalars['String']['output']>;
  display_mode: Maybe<Scalars['String']['output']>;
  filter_price_range: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['String']['output']>;
  include_in_menu: Maybe<Scalars['Int']['output']>;
  is_anchor: Maybe<Scalars['Int']['output']>;
  landing_page: Maybe<Scalars['Int']['output']>;
  /** The depth of the category within the tree. */
  level: Maybe<Scalars['Int']['output']>;
  meta_description: Maybe<Scalars['String']['output']>;
  meta_keywords: Maybe<Scalars['String']['output']>;
  meta_title: Maybe<Scalars['String']['output']>;
  /** The display name of the category. */
  name: Maybe<Scalars['String']['output']>;
  /** The full category path. */
  path: Maybe<Scalars['String']['output']>;
  /** The category path within the store. */
  path_in_store: Maybe<Scalars['String']['output']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position: Maybe<Scalars['Int']['output']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count: Maybe<Scalars['Int']['output']>;
  /** The list of products assigned to the category. */
  products: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** The URL key assigned to the category. */
  url_key: Maybe<Scalars['String']['output']>;
  /** The URL path assigned to the category. */
  url_path: Maybe<Scalars['String']['output']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
};


/** Contains the hierarchy of categories. */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ProductAttributeSortInput>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output'];
  /** Required. The text of the agreement. */
  content: Scalars['String']['output'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String']['output'];
};

/** Indicates how agreements are accepted. */
export enum CheckoutAgreementMode {
  /**
   * Conditions are automatically accepted upon checkout.
   * @deprecated
   */
  Auto = 'AUTO',
  /**
   * Shoppers must manually accept the conditions to place an order.
   * @deprecated
   */
  Manual = 'MANUAL'
}

export type CheckoutSessionConfigOutput = {
  __typename?: 'CheckoutSessionConfigOutput';
  button_color: Maybe<Scalars['String']['output']>;
  checkout_payload: Maybe<Scalars['String']['output']>;
  checkout_signature: Maybe<Scalars['String']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  language: Maybe<Scalars['String']['output']>;
  login_payload: Maybe<Scalars['String']['output']>;
  login_signature: Maybe<Scalars['String']['output']>;
  merchant_id: Maybe<Scalars['String']['output']>;
  pay_only: Maybe<Scalars['Boolean']['output']>;
  paynow_payload: Maybe<Scalars['String']['output']>;
  paynow_signature: Maybe<Scalars['String']['output']>;
  public_key_id: Maybe<Scalars['String']['output']>;
  sandbox: Maybe<Scalars['Boolean']['output']>;
};

export type CheckoutSessionDetailsOutput = {
  __typename?: 'CheckoutSessionDetailsOutput';
  response: Scalars['String']['output'];
};

export type CheckoutSessionSignInOutput = {
  __typename?: 'CheckoutSessionSignInOutput';
  customer_bearer_token: Maybe<Scalars['String']['output']>;
  customer_email: Maybe<Scalars['String']['output']>;
  customer_firstname: Maybe<Scalars['String']['output']>;
  customer_id: Maybe<Scalars['String']['output']>;
  customer_last: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  success: Maybe<Scalars['Boolean']['output']>;
};

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>;
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** The content of the CMS block in raw HTML. */
  content: Maybe<Scalars['String']['output']>;
  /** The CMS block identifier. */
  identifier: Maybe<Scalars['String']['output']>;
  /** The title assigned to the CMS block. */
  title: Maybe<Scalars['String']['output']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks. */
  items: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** The content of the CMS page in raw HTML. */
  content: Maybe<Scalars['String']['output']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading: Maybe<Scalars['String']['output']>;
  /** The ID of a CMS page. */
  identifier: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_keywords: Maybe<Scalars['String']['output']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key: Maybe<Scalars['String']['output']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>;
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output'];
  /** The label of the attribute code. */
  label: Scalars['String']['output'];
};

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products. */
  attributes: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output'];
  /** An array of products to compare. */
  items: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output'];
};

export type CompleteCheckoutSessionOutput = {
  __typename?: 'CompleteCheckoutSessionOutput';
  increment_id: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  success: Maybe<Scalars['Boolean']['output']>;
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output'];
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute. */
  code: Maybe<Scalars['String']['output']>;
  /** A string that describes the configurable attribute option. */
  label: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output'];
  /** A unique index number assigned to the configurable product option. */
  value_index: Maybe<Scalars['Int']['output']>;
};

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>;
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** An array of options for the configurable product. */
  configurable_options: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection: Maybe<ConfigurableProductOptionsSelection>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** An array of simple product variants. */
  variants: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** The display name of the option. */
  label: Scalars['String']['output'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output'];
  /** An array of values that are applicable for this option. */
  values: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output'];
  /** The display name of the value. */
  label: Scalars['String']['output'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID']['output'];
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute. */
  attribute_code: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2: Maybe<Scalars['Int']['output']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** A displayed string that describes the configurable product option. */
  label: Maybe<Scalars['String']['output']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position: Maybe<Scalars['Int']['output']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the option is the default. */
  use_default: Maybe<Scalars['Boolean']['output']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** An array of all possible configurable options. */
  configurable_options: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant: Maybe<SimpleProduct>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store. */
  default_label: Maybe<Scalars['String']['output']>;
  /** The label of the product. */
  label: Maybe<Scalars['String']['output']>;
  /** The label of the product on the current store. */
  store_label: Maybe<Scalars['String']['output']>;
  /** Swatch data for a configurable product option. */
  swatch_data: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid: Maybe<Scalars['ID']['output']>;
  /** Indicates whether to use the default_label. */
  use_default_value: Maybe<Scalars['Boolean']['output']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index: Maybe<Scalars['Int']['output']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  /** An array of configurable attribute options. */
  attributes: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product: Maybe<SimpleProduct>;
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output'];
  /** An array of selected configurable options. */
  configurable_options: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
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

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input'];
  /** The summary (title) of the review. */
  summary: Scalars['String']['input'];
  /** The review text. */
  text: Scalars['String']['input'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Product review details. */
  review: ProductReview;
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

/** Contains credit memo details. */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output'];
  /** An array containing details about refunded items. */
  items: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String']['output'];
  /** Details about the total refunded amount. */
  total: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code: Maybe<Scalars['String']['output']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol: Maybe<Scalars['String']['output']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code: Maybe<Scalars['String']['output']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol: Maybe<Scalars['String']['output']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates: Maybe<Array<Maybe<ExchangeRate>>>;
};

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

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes. */
  items: Maybe<Array<Maybe<Attribute>>>;
};

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses. */
  addresses: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output'];
  /** The contents of the customer's compare list. */
  compare_list: Maybe<CompareList>;
  /** Timestamp indicating when the account was created. */
  created_at: Maybe<Scalars['String']['output']>;
  /** The customer's date of birth. */
  date_of_birth: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the billing address. */
  default_billing: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the shipping address. */
  default_shipping: Maybe<Scalars['String']['output']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob: Maybe<Scalars['String']['output']>;
  /** The customer's email address. Required. */
  email: Maybe<Scalars['String']['output']>;
  /** The customer's first name. */
  firstname: Maybe<Scalars['String']['output']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender: Maybe<Scalars['Int']['output']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id: Maybe<Scalars['Int']['output']>;
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed: Maybe<Scalars['Boolean']['output']>;
  /** The customer's family name. */
  lastname: Maybe<Scalars['String']['output']>;
  /** The customer's middle name. */
  middlename: Maybe<Scalars['String']['output']>;
  orders: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat: Maybe<Scalars['String']['output']>;
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID']['input'];
};


/** Defines the customer name, addresses, and other details. */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The customer's city or town. */
  city: Maybe<Scalars['String']['output']>;
  /** The customer's company. */
  company: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id: Maybe<Scalars['String']['output']>;
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping: Maybe<Scalars['Boolean']['output']>;
  /** Contains any extension attributes for the address. */
  extension_attributes: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Maybe<Scalars['String']['output']>;
  /** The ID of a `CustomerAddress` object. */
  id: Maybe<Scalars['Int']['output']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Maybe<Scalars['String']['output']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>;
  /** An object containing the region name, region code, and region ID. */
  region: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>;
  /** An array of strings that define the street number and name. */
  street: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>;
  /** The customer's telephone number. */
  telephone: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** The name assigned to the customer address attribute. */
  attribute_code: Maybe<Scalars['String']['output']>;
  /** The valuue assigned to the customer address attribute. */
  value: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input'];
  /** The value assigned to the attribute. */
  value: Scalars['String']['input'];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name. */
  region: Maybe<Scalars['String']['output']>;
  /** The address region code. */
  region_code: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email: Scalars['String']['input'];
  /** The customer's first name. */
  firstname: Scalars['String']['input'];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname: Scalars['String']['input'];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  /** The date and time the purchase was made. */
  date: Maybe<Scalars['String']['output']>;
  /** The fully qualified URL to the download file. */
  download_url: Maybe<Scalars['String']['output']>;
  /** The unique ID assigned to the item. */
  order_increment_id: Maybe<Scalars['String']['output']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads: Maybe<Scalars['String']['output']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status: Maybe<Scalars['String']['output']>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** An array of purchased downloadable items. */
  items: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order. */
  billing_address: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery. */
  carrier: Maybe<Scalars['String']['output']>;
  /** Comments about the order. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at: Maybe<Scalars['String']['output']>;
  /** A list of credit memos. */
  credit_memos: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message: Maybe<GiftMessage>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output'];
  /** @deprecated Use the `id` field instead. */
  increment_id: Maybe<Scalars['String']['output']>;
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number. */
  number: Scalars['String']['output'];
  /** The date the order was placed. */
  order_date: Scalars['String']['output'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output'];
  /** Payment details for the order. */
  payment_methods: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order. */
  shipments: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method: Maybe<Scalars['String']['output']>;
  /** The current status of the order. */
  status: Scalars['String']['output'];
  /** Details about the calculated totals for this order. */
  total: Maybe<OrderTotal>;
};

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer authorization token. */
  token: Maybe<Scalars['String']['output']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars['String']['input']>;
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text area. */
  value: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of checkbox values. */
  value: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The order in which the checkbox value is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a date field in a customizable option. */
  value: Maybe<CustomizableDateValue>;
};

/** Defines the customizable date type. */
export enum CustomizableDateTypeEnum {
  /** @deprecated  */
  Date = 'DATE',
  /** @deprecated  */
  DateTime = 'DATE_TIME',
  /** @deprecated  */
  Time = 'TIME'
}

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** DATE, DATE_TIME or TIME */
  type: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a drop down menu. */
  value: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text field. */
  value: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters: Maybe<Scalars['Int']['output']>;
  /** The price of the custom value. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a file value. */
  value: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension: Maybe<Scalars['String']['output']>;
  /** The maximum width of an image. */
  image_size_x: Maybe<Scalars['Int']['output']>;
  /** The maximum height of an image. */
  image_size_y: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a multiselect. */
  value: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The string value of the option. */
  value_string: Scalars['String']['input'];
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of radio buttons. */
  value: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>;
  /** The order in which the radio button is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output'];
};

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output'];
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount. */
  amount: Money;
  /** A description of the discount. */
  label: Scalars['String']['output'];
};

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** An array containing information about the links for the downloadable product added to the cart. */
  links: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about samples of the selected downloadable product. */
  samples: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = 'FILE',
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = 'URL'
}

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>;
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately: Maybe<Scalars['Int']['output']>;
  /** The heading above the list of downloadable products. */
  links_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend. */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads: Maybe<Scalars['Int']['output']>;
  /** The price of the downloadable product. */
  price: Maybe<Scalars['Float']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend. */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>;
  /** The display name of the sample. */
  title: Maybe<Scalars['String']['output']>;
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** An array containing information about the selected links. */
  links_v2: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about the selected samples. */
  samples: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input'];
  /** Text the customer entered. */
  value: Scalars['String']['input'];
};

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated Use `relative_url` instead. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid: Maybe<Scalars['ID']['output']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode: Maybe<Scalars['Int']['output']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** Specifies the store’s default currency to exchange to. */
  currency_to: Maybe<Scalars['String']['output']>;
  /** The exchange rate for the store’s default currency. */
  rate: Maybe<Scalars['Float']['output']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']['input']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']['input']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']['input']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** The amount of the Fixed Product Tax. */
  amount: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label: Maybe<Scalars['String']['output']>;
};

/** Lists display settings for the Fixed Product Tax. */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.'
   * @deprecated
   */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'.
   * @deprecated
   */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query.
   * @deprecated
   */
  FptDisabled = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'.
   * @deprecated
   */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'.
   * @deprecated
   */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token. */
  customer_token: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String']['output'];
  /** Gift message text */
  message: Scalars['String']['output'];
  /** Recipient name */
  to: Scalars['String']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String']['input'];
  /** Gift message text */
  message: Scalars['String']['input'];
  /** Recipient name */
  to: Scalars['String']['input'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** An array containing grouped product items. */
  items: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items. */
  position: Maybe<Scalars['Int']['output']>;
  /** Details about this product option. */
  product: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty: Maybe<Scalars['Float']['output']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** The secure URL generated by PayPal. */
  secure_form_url: Maybe<Scalars['String']['output']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** A parameter name. */
  name: Maybe<Scalars['String']['output']>;
  /** A parameter value. */
  value: Maybe<Scalars['String']['output']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail: Maybe<Scalars['String']['output']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>;
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  __typename?: 'InternalError';
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Contains invoice details. */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output'];
  /** Invoiced product details. */
  items: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String']['output'];
  /** Invoice total amount details. */
  total: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The invoice tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available: Maybe<Scalars['Boolean']['output']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output'];
  /** A list of products that represent the values of the parent option. */
  values: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains a key-value pair. */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the key/value pair. */
  name: Maybe<Scalars['String']['output']>;
  /** The value part of the key/value pair. */
  value: Maybe<Scalars['String']['output']>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count: Maybe<Scalars['Int']['output']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name: Maybe<Scalars['String']['output']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Details about the content of the media gallery item. */
  content: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>;
  /** The path of the image on the server. */
  file: Maybe<Scalars['String']['output']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label: Maybe<Scalars['String']['output']>;
  /** Either `image` or `video`. */
  media_type: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output'];
  /** Details about the content of a video item. */
  video_content: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>;
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR. */
  currency: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value: Maybe<Scalars['Float']['output']>;
};

export type MoreFromBrand = {
  __typename?: 'MoreFromBrand';
  /** An array of products */
  items: Maybe<Array<Maybe<ProductInterface>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type MpFilters = {
  /** Filter From Date. */
  from: Scalars['String']['input'];
  /** Period. */
  period_type?: InputMaybe<Scalars['String']['input']>;
  /** Show Empty Rows. */
  show_empty_rows?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter Store Id. */
  store_id?: InputMaybe<Scalars['Int']['input']>;
  /** Filter To Date. */
  to: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart: Maybe<AddBundleProductsToCartOutput>;
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart: Maybe<AddConfigurableProductsToCartOutput>;
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart. */
  addProductsToCart: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list. */
  addProductsToCompareList: Maybe<CompareList>;
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist: Maybe<AddProductsToWishlistOutput>;
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart: Maybe<AddSimpleProductsToCartOutput>;
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart: Maybe<AddWishlistItemsToCartOutput>;
  adyenPaymentDetails: Maybe<AdyenPaymentStatus>;
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart: Maybe<ApplyCouponToCartOutput>;
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer: Maybe<AssignCompareListToCustomerOutput>;
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart;
  /** Change the password for the logged-in customer. */
  changeCustomerPassword: Maybe<Customer>;
  /** Complete Checkout Session */
  completeCheckoutSession: Maybe<CompleteCheckoutSessionOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']['output'];
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList: Maybe<CompareList>;
  /** Use `createCustomerV2` instead. */
  createCustomer: Maybe<CustomerOutput>;
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress: Maybe<CustomerAddress>;
  /** Create a customer account. */
  createCustomerV2: Maybe<CustomerOutput>;
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart: Maybe<Scalars['String']['output']>;
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken: Maybe<CreatePayflowProTokenOutput>;
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken: Maybe<PaypalExpressTokenOutput>;
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput;
  /** Delete the specified compare list. */
  deleteCompareList: Maybe<DeleteCompareListOutput>;
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress: Maybe<Scalars['Boolean']['output']>;
  /** Delete a customer's payment token. */
  deletePaymentToken: Maybe<DeletePaymentTokenOutput>;
  /** Generate a token for specified customer. */
  generateCustomerToken: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse: Maybe<PayflowProResponseOutput>;
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart;
  /** Convert the quote into an order. */
  placeOrder: Maybe<PlaceOrderOutput>;
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart: Maybe<RemoveCouponFromCartOutput>;
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList: Maybe<CompareList>;
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist: Maybe<RemoveProductsFromWishlistOutput>;
  /** Add all products from a customer's previous order to the cart. */
  reorderItems: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail: Maybe<Scalars['Boolean']['output']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword: Maybe<Scalars['Boolean']['output']>;
  /** Revoke the customer token. */
  revokeCustomerToken: Maybe<RevokeCustomerTokenOutput>;
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend: Maybe<SendEmailToFriendOutput>;
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart: Maybe<SetBillingAddressOnCartOutput>;
  /** Set Customer Link */
  setCustomerLink: Maybe<SetCustomerLinkOutput>;
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart: Maybe<SetGuestEmailOnCartOutput>;
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder: Maybe<PlaceOrderOutput>;
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart: Maybe<SetPaymentMethodOnCartOutput>;
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart: Maybe<SetShippingAddressesOnCartOutput>;
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter: Maybe<SubscribeEmailToNewsletterOutput>;
  /** Modify items in the cart. */
  updateCartItems: Maybe<UpdateCartItemsOutput>;
  /** Update Checkout Session */
  updateCheckoutSession: Maybe<UpdateCheckoutSessionOutput>;
  /** Use `updateCustomerV2` instead. */
  updateCustomer: Maybe<CustomerOutput>;
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress: Maybe<CustomerAddress>;
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail: Maybe<CustomerOutput>;
  /** Update the customer's personal information. */
  updateCustomerV2: Maybe<CustomerOutput>;
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist: Maybe<UpdateProductsInWishlistOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String']['input'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToCompareListArgs = {
  input: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddSimpleProductsToCartArgs = {
  input: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemIds: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationAdyenPaymentDetailsArgs = {
  cart_id: Scalars['String']['input'];
  payload: Scalars['String']['input'];
};


export type MutationApplyCouponToCartArgs = {
  input: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationCompleteCheckoutSessionArgs = {
  amazonSessionId: Scalars['String']['input'];
  cartId: Scalars['String']['input'];
};


export type MutationCreateCompareListArgs = {
  input: InputMaybe<CreateCompareListInput>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String']['input'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  destination_cart_id: InputMaybe<Scalars['String']['input']>;
  source_cart_id: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  input: InputMaybe<PlaceOrderInput>;
};


export type MutationRemoveCouponFromCartArgs = {
  input: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveProductsFromCompareListArgs = {
  input: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItemsIds: Array<Scalars['ID']['input']>;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String']['input'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};


export type MutationSendEmailToFriendArgs = {
  input: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetCustomerLinkArgs = {
  buyerToken: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSetGuestEmailOnCartArgs = {
  input: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCartItemsArgs = {
  input: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateCheckoutSessionArgs = {
  amazonSessionId: Scalars['String']['input'];
  cartId: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int']['input'];
  input: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']['input'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError';
  /** The returned error message. */
  message: Scalars['String']['output'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output'];
};

/** Contains the order ID. */
export type Order = {
  __typename?: 'Order';
  adyen_payment_status: Maybe<AdyenPaymentStatus>;
  /** Cart ID. */
  cart_id: Scalars['String']['output'];
  /** @deprecated Use `order_number` instead. */
  order_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output'];
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town. */
  city: Scalars['String']['output'];
  /** The customer's company. */
  company: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>;
  /** The state or province name. */
  region: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id: Maybe<Scalars['ID']['output']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>;
  /** The telephone number. */
  telephone: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id: Maybe<Scalars['String']['output']>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option. */
  label: Scalars['String']['output'];
  /** The value of the option. */
  value: Scalars['String']['output'];
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type. */
  additional_data: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String']['output'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output'];
};

/** Contains order shipment details. */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output'];
  /** An array of items included in the shipment. */
  items: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String']['output'];
  /** An array of shipment tracking details. */
  tracking: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The order tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
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

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  Live = 'LIVE',
  /** @deprecated  */
  Test = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** The mode for the Payflow transaction. */
  mode: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url: Maybe<Scalars['String']['output']>;
  /** The secure token generated by PayPal. */
  secure_token: Maybe<Scalars['String']['output']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id: Maybe<Scalars['String']['output']>;
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

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

/** The stored payment method available to the customer. */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** A description of the stored account details. */
  details: Maybe<Scalars['String']['output']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output'];
  /** The public hash of the token. */
  public_hash: Scalars['String']['output'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export enum PaymentTokenTypeEnum {
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Account = 'account',
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Card = 'card'
}

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input'];
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token: Maybe<Scalars['String']['output']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The payment method code. */
  code: Scalars['String']['input'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']['input']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token: Maybe<Scalars['String']['output']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit: Maybe<Scalars['String']['output']>;
  /** The URL to the PayPal login page. */
  start: Maybe<Scalars['String']['output']>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']['input']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']['input']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city: Maybe<Scalars['String']['output']>;
  contact_name: Maybe<Scalars['String']['output']>;
  country_id: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  fax: Maybe<Scalars['String']['output']>;
  latitude: Maybe<Scalars['Float']['output']>;
  longitude: Maybe<Scalars['Float']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  pickup_location_code: Maybe<Scalars['String']['output']>;
  postcode: Maybe<Scalars['String']['output']>;
  region: Maybe<Scalars['String']['output']>;
  region_id: Maybe<Scalars['Int']['output']>;
  street: Maybe<Scalars['String']['output']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  /** The ID of the order. */
  order: Order;
};

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
  Tax = 'TAX',
  /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
  Weee = 'WEEE',
  /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
  WeeeTax = 'WEEE_TAX'
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  Excluded = 'EXCLUDED',
  /** @deprecated  */
  Included = 'INCLUDED'
}

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Defines the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  Dynamic = 'DYNAMIC',
  /** @deprecated  */
  Fixed = 'FIXED',
  /** @deprecated  */
  Percent = 'PERCENT'
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AsLowAs = 'AS_LOW_AS',
  /** @deprecated  */
  PriceRange = 'PRICE_RANGE'
}

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output'];
  /** The display value of the attribute. */
  value: Scalars['String']['output'];
};

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Acabado */
  acabado_guitarra?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Acc.pastilla */
  acc_pastilla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Activa / Pasiva */
  activa_pasiva?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: ADAT */
  adat?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Adecuado para */
  adecuado_para?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Admite módulo inalámbrico */
  admite_modulo_inalambrico?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: AES/EBU */
  aesebu?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Afinación */
  afinacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Aftertouch */
  aftertouch?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Ajuste Atack/Release */
  ajuste_atackrelease?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentación eléctrica */
  alimentacion_electrica?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentación pilas */
  alimentacion_pilas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentación USB */
  alimentacion_usb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentador externo */
  alimentador_externo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentador incluido */
  alimentador_incluido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Altavoces activos */
  altavoces_activos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Distribución de Altavoces */
  altavoces_guitarra_bajo?: InputMaybe<FilterEqualTypeInput>;
  /** New Filter */
  am_is_new?: InputMaybe<AmShopbyCustomFilterTypeInput>;
  /** Sale Filter */
  am_on_sale?: InputMaybe<AmShopbyCustomFilterTypeInput>;
  /** Attribute label: Anillos desplazables */
  anillos_desplazables?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: App de control */
  app_de_control?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Aros y fondo */
  aros_y_fondo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Aros y fondo macizo */
  aros_y_fondo_macizo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Arpegiador */
  arpegiador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Atril */
  atril?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bluetooth AUDIO IN */
  audio_in_bluetooth?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Auriculares */
  auriculares?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Autoamplificado */
  autoamplificado?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Automático */
  automatico?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Aux In */
  aux_in?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bajo */
  bajo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bandas de Frecuencia */
  bandas_de_frecuencia?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Base */
  base?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bass reflex */
  bass_reflex?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bloqueo */
  bloqueo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bluetooth */
  bluetooth?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Versión Bluetooth */
  bluetooth_vers?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Brazo */
  brazo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: USB Bus-Powered */
  bus_powered?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cable intercambiable */
  cable_intercambiable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Calibre base */
  calibre_base?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Calibre (rango) */
  calibre_rango?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cámara */
  camara?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Canal llamadas TLF */
  canal_llamadas_tlf?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cancelación ruido */
  cancelacion_ruido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cápsula */
  capsula?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: CD */
  cd?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Clase de etapa */
  clase_de_etapa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Códecs */
  codecs_2?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Colección */
  coleccion?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Color acond */
  color_acond_acust?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color acordeón */
  color_acordeon?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color auricular */
  color_auriculares?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color casco */
  color_casco?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color correa */
  color_correa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color guit elect */
  color_guit_elect?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color Mic */
  color_mics?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color pastilla */
  color_pastilla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Colores */
  color_piano?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color recinto */
  color_recinto?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color soporte */
  color_soporte?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color textil */
  color_textil?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Compatible con */
  compatible_con?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Compresor */
  compresor?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Compresor / Limitador */
  compresor_limitador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Con metrónomo */
  con_metronomo_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Con sonajas */
  con_sonajas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Con tapa */
  con_tapa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conector */
  conector?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: conector A */
  conector_1?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: conector B */
  conector_2?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conector para stage-box */
  conector_para_caja_de_escenario_digital?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conector sustain */
  conector_sustain?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conectores */
  conectores?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conexión Auriculares */
  conexion_auriculares?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conexión Footswitch */
  conexion_footswitch?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conexión Salida Máster */
  conexion_salida_master?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Configuración altavoces */
  configuracion_altavoces?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Configuración de pastillas */
  configuracion_de_pastillas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Construcción */
  construccion_guit?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Control Expresión */
  control_expresion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Control Volumen */
  control_volumen?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Controles delanteros */
  controles_delanteros?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Controles giratorios */
  controles_giratorios?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conversor AD/DA */
  conversor_ad_da?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Corrección frecuencia */
  correccion_de_frecuencia_manual?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cost */
  cost?: InputMaybe<FilterRangeTypeInput>;
  created_at?: InputMaybe<FilterTypeInput>;
  /** Attribute label: CST (Candidato Salir Tarifa) */
  cst?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Posición cuerda */
  cuerda_posic?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cuerda suelta */
  cuerda_suelta?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cuerpo */
  cuerpo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: New Theme */
  custom_design?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cutaway */
  cutaway_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Decksaver para */
  decksaver_para?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Destacado */
  destacado?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: ¿Mostrar destacado en la home? */
  destacado_home?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diámetro parche */
  diametro_parche?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diámetro plato */
  diametro_plato?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diapasón */
  diapason?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Digitación */
  digitacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diseñado para */
  disenado_para?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diseño */
  diseno?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diseño trapezoidal */
  diseno_trapezoidal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Disponibilidad */
  dispo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Diversity */
  diversity_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Doble pedal */
  doble_pedal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Drive agudos */
  drive_agudos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: DSP */
  dsp?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Dual */
  dual?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Dureza */
  dureza?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Dureza maza */
  dureza_maza?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Efectos */
  efectos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Efectos DSP Internos */
  efectos_dsp_internos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Electrónica */
  electronica?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Enracable */
  enracable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entorchado 3ª cuerda */
  entorchado_3_cuerda?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada Audio USB */
  entrada_audio_usb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada digital */
  entrada_digital?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada Jack */
  entrada_jack?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada Línea */
  entrada_linea?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada MIC */
  entrada_mic?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada Minijack */
  entrada_minijack?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada RCA */
  entrada_rca?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entrada XLR */
  entrada_xlr?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas audio */
  entradas_audio?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas de Micrófono */
  entradas_de_microfono?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas Intrumento */
  entradas_intrumento?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas Línea */
  entradas_linea?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas MIC */
  entradas_mic?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas Phono */
  entradas_phono?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Entradas totales */
  entradas_totales?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: E/S de Audio */
  es_de_audio?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: E/S Digitales */
  es_digitales?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Loop para efectos */
  es_para_efectos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Escala */
  escala?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye estuche */
  estuche?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Ethernet */
  ethernet?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Extremos acodados */
  extremos_acodados?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material púa */
  fabricacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fabricante */
  fabricante?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Figura */
  figura?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Filtro Ajustable */
  filtro_ajustable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Filtro paso alto */
  filtro_paso_alto?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fondo flameado */
  fondo_flameado?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Footswitch incluido */
  footswitch_incluido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Formato del recinto */
  formato?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Formato afinador */
  formato_afinador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Formato pastilla */
  formato_pastilla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Formato rack */
  formato_rack?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Formato del soporte */
  formato_soporte?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Frec. de muestreo máx. */
  frecuencia_muestreo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función aprendizaje */
  funcion_aprendizaje?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función layer */
  funcion_layer?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función medio pedal */
  funcion_medio_pedal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función split */
  funcion_split?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función suma */
  funcion_suma?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Funciona a pilas */
  funciona_a_pilas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Función mesa de mezclas */
  funciona_como_mezcladora?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Funciona con batería externa */
  funciona_con_bateria_externa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Funciona con baterías */
  funciona_con_baterias?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Funciona sin PC/Pendrive */
  funciona_sin_pcusb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye funda */
  funda?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Grabación a USB / SD */
  grabacion_a_usb_sd?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Grabación Multipista */
  grabacion_multipista?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Grip */
  grip?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Habilitado */
  habilitado?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Hotspot wifi */
  hotspot_wifi?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Iluminación */
  iluminacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Impedancia */
  impedancia?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Impedancia altavoz */
  impedancia_altavoz?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Inalámbrico */
  inalambrico?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incl. Cable (muerto) */
  incl_cable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incl. Soportes (muerto) */
  incl_soportes?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Afinador */
  incluye_afinador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Amplificador */
  incluye_amplificador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye antiviento */
  incluye_antiviento?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye apoyo hombro */
  incluye_apoyo_hombro?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye arco */
  incluye_arco?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye auriculares */
  incluye_auriculares?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye baquetas */
  incluye_baquetas_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye barbada */
  incluye_barbada?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye cable */
  incluye_cable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye cápsula y aguja */
  incluye_capsula_y_aguja?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Correa */
  incluye_correa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye herrajes */
  incluye_herrajes_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye MIC inalámbrico */
  incluye_mic_inalambrico?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye pedal bombo BOOL (muerto) */
  incluye_pedal_bombo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye pedal bombo */
  incluye_pedal_bombo_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye pie hihat */
  incluye_pie_hihat_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye platos BOOL (muerto) */
  incluye_platos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye platos */
  incluye_platos_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Púa */
  incluye_pua?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye rack */
  incluye_rack_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye sillín */
  incluye_sillin_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Soporte */
  incluye_soporte?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye soporte caja */
  incluye_soporte_caja_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye suspensión */
  incluye_suspension?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Tapa */
  incluye_tapa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Instrumento */
  instrumento?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Incluye Interfaz */
  interfaz?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Interfaz de Audio */
  interfaz_de_audio?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Interfaz de usuario */
  interfaz_de_usuario?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Interruptor on/off */
  interruptor_onoff?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: ¿Producto B-Stock? */
  isbstock?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Jirafa */
  jirafa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Jogwheel */
  jogwheel?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Juego completo */
  juego_completo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Lector SD */
  lector_sd?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Lector USB */
  lector_usb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Limitador */
  limitador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Longitud cable */
  longitud_cable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Longitud cuerda */
  longitud_cuerda?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Longitud escala */
  longitud_escala?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mango de madera */
  mango_de_madera_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Master Out */
  master_out?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mástil */
  mastil?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material absorbente */
  material_absorbente?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material baqueta */
  material_baqueta?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cabeza (ext) */
  material_cabeza_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material casco */
  material_casco?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material castañuela */
  material_castanyuela?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material cuerda */
  material_cuerda?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material escobilla */
  material_escobilla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material fabricación */
  material_fabricacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material recinto */
  material_recinto?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material del soporte */
  material_soporte2?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material tejido */
  material_tejido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mazas para */
  mazas_para?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Medidor nivel */
  medidor_nivel?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Medio de soporte */
  medio_de_soporte?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Medio juego */
  medio_juego?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mesa de mezclas */
  mesa_de_mezclas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Metal */
  metal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mezclador Interno */
  mezclador_interno?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mic In */
  mic_in?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Micrófono */
  microfono?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Midi */
  midi?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: MIDI DIN-5 */
  midi_din_5?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Midi por Bluetooth */
  midi_por_bluetooth?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: MIDI Thru */
  midi_thru?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Modelado Amp */
  modelado_amp?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Monitor Out */
  monitor_out?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Mono / Stereo */
  mono_stereo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Montaje en Rack */
  montaje_en_rack?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Motor de sonidos */
  motor_de_sonidos?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by news_from_date. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** Filter product by news_to_date. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** Attribute label: Novedad */
  novedad?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Nº de canales */
  num_canales?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Canales estéreo */
  num_canales_estereo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº cuerdas */
  num_cuerdas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de AUX */
  num_de_aux?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de bajos */
  num_de_bajos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de Canales DSP */
  num_de_canales_digitales_dsp?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de faders */
  num_de_faders?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de lengüetas */
  num_de_lenguetas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de Teclados */
  num_de_teclados?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de teclas */
  num_de_teclas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de teclas / botones */
  num_de_teclas_botones?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de vías */
  num_de_vias?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de Woofers */
  num_de_woofers?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Entradas */
  num_entradas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Entradas Analógicas */
  num_entradas_analogicas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº entradas L+R */
  num_entradas_l_r?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Entradas Stereo */
  num_entradas_stereo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Entradas XLR */
  num_entradas_xlr?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº estilos */
  num_estilos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº de piezas */
  num_piezas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº registros */
  num_registros?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Salidas */
  num_salidas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº Salidas Analógicas */
  num_salidas_analogicas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº salidas L+R */
  num_salidas_l_r?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº sonidos */
  num_sonidos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº voces */
  num_voces?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nº zonas split */
  num_zonas_split?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pack */
  pack?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pads */
  pads?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pantalla */
  pantalla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pantallas LCD */
  pantallas_lcd?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Batería */
  para_bateria?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Cámaras */
  para_camaras?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Guitarra */
  para_guitarra?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Instrumentos de Viento */
  para_instrumentos_de_viento?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Niños */
  para_ninos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Para Voz */
  para_voz?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pastilla acústica */
  pastilla_acustica?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Patrón polar */
  patron_polar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Patrones conmutables */
  patrones_conmutables?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: PC / Tablet / Smartphone */
  pc_tablet_smartphone?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pedal Expresión */
  pedal_expresion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Peine */
  peine?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: PFL */
  pfl?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Alimentación Phantom */
  phantom_power?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Piccolo */
  piccolo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pistones */
  pistones?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pitch */
  pitch?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pitch/Bend */
  pitch_bend?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Polaridad conmutable */
  polaridad_conmutable?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Polifonía */
  polifonia_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Posición pastilla */
  posicion_pastilla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Potencia para 4 Ohms/canal (Muerto) */
  potencia_para_4_ohmscanal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Previo (muerto) */
  previo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Previo */
  previo_ss?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Previos MIC */
  previos_mic?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Precio */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Procesadores de Efectos */
  procesadores_de_efectos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Etiqueta Grid */
  product_grid_label?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Protección Magnética */
  proteccion_magnetica?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Protocolo Conexión */
  protocolo_conexion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Puerta */
  puerta?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Punta de Nylon */
  punta_de_nylon?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rango Frecuencias */
  rango_frecuencias?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rango impedancia */
  rango_impedancias?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rango peso */
  rango_peso?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rango potencia PA */
  rango_potencia_altavoz?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rango potencia Amp */
  rango_potencia_ampg?: InputMaybe<FilterEqualTypeInput>;
  /** Rating Filter */
  rating_summary?: InputMaybe<AmShopbyCustomFilterTypeInput>;
  /** Attribute label: REC Out */
  rec_out?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Registro */
  registro?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Regulación altura */
  regulacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Regulador volumen por canal */
  regulador_volumen_por_canal?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Reproductor Bluetooth */
  reproductor_bluetooth?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Graba/reproduce en USB/SD */
  reproductor_grabador_integrado_via_usb_sd?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Reproductor USB */
  reproductor_usb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Resolución */
  resolucion_bits?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Respaldo */
  respaldo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Respuesta en frecuencia */
  respuesta_en_frecuencia?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Retráctil */
  retractil?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Ritmos */
  ritmos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Rueda modulación */
  rueda_modulacion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Ruedas */
  ruedas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Conector de salida */
  salida?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salida auriculares */
  salida_auriculares?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salida DI */
  salida_di?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salida Directa */
  salida_directa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salida Línea */
  salida_linea?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salidas audio */
  salidas_audio?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salidas Físicas */
  salidas_fisicas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Salidas totales */
  salidas_totales?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sampler */
  sampler?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sampling */
  sampling?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sección */
  seccion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Secuenciador / Grabador */
  secuenciador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Secuenciador */
  secuenciador_groove?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Señal Stereo Wireless */
  senal_stereo_wireless?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Send / Return (muerto) */
  send_return?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Send / Return */
  sendreturn?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sensible al tacto */
  sensible_al_tacto?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Signature */
  signature?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sistema */
  sistema?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sistema electrónico */
  sistema_electronico?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sistema portátil */
  sistema_portatil?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sku */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SMPTE Timecode */
  smpte_timecode?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: S.O. Compatible */
  so_compatible?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Software aprendizaje */
  software_aprendizaje?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Software incluido */
  software_incluido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Soporte */
  soporte?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SPDIF */
  spdif?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Precio Especial */
  special_price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: SPL Máx. */
  spl_max?: InputMaybe<FilterEqualTypeInput>;
  /** Stock Filter */
  stock_status?: InputMaybe<AmShopbyCustomFilterTypeInput>;
  /** Attribute label: Subgrupos */
  subgrupos?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Subwoofer */
  subwoofer?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sujeción */
  sujecion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Suspendido */
  suspendido?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Talk Over */
  talk_over?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Talkback */
  talkback?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Talla */
  talla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño */
  tamano?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño bombo */
  tamano_bombo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño del altavoz (muerto) */
  tamano_cono_de_graves?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño Nº */
  tamano_num?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Altavoz graves (pulgadas) */
  tamano_woofer?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño guitarra */
  tamanyo_guitarra?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tamaño instrumento */
  tamanyo_instrumento?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tapa */
  tapa?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tapa maciza */
  tapa_maciza?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Teclas de Madera */
  teclas_de_madera?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Teclas luminosas */
  teclas_luminosas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tensión */
  tension?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: 3ª Entorchada (muerto) */
  tercera_entorchada?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo producto */
  tipo_acondic?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo Ampli */
  tipo_ampli?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo Controlador */
  tipo_controlador?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo de emisor */
  tipo_de_emisor?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo de módulo */
  tipo_de_modulo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo de pie */
  tipo_de_pie?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo de receptor */
  tipo_de_receptor?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo de Tecla */
  tipo_de_tecla?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo Equipo */
  tipo_equipo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo estuche */
  tipo_estuche?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tipo parche */
  tipo_parche?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tonalidad */
  tonalidad?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Tracción */
  traccion?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Transmisión */
  transmision?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Trastes */
  trastes?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Trémolo */
  tremolo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Trémolo */
  tremolo_1?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Trípodes */
  tripodes?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Trompeta agudos */
  trompeta_agudos?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: USB */
  usb?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Usb a Dispositivo */
  usb_a_dispositivo?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Usb a Host */
  usb_a_host?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Usb Host */
  usb_host?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Válvulas */
  valvulas?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Variedad batucada */
  variedad_batucada?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Variedad tambor */
  variedad_tambor?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Vaso de montaje */
  vaso_de_montaje?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Word Clock */
  word_clock?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Work Clock (muerto) */
  work_clock?: InputMaybe<FilterEqualTypeInput>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Nombre */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off: Maybe<Scalars['Float']['output']>;
  /** The discount expressed a percentage. */
  percent_off: Maybe<Scalars['Float']['output']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']['input'];
};

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Contains fields that are common to all types of products. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku: Maybe<Scalars['String']['output']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku: Maybe<Scalars['String']['output']>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data: Maybe<Scalars['String']['output']>;
  /** The file name of the image. */
  name: Maybe<Scalars['String']['output']>;
  /** The MIME type of the file, such as image/png. */
  type: Maybe<Scalars['String']['output']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type: Maybe<Scalars['String']['output']>;
  /** A description of the video. */
  video_description: Maybe<Scalars['String']['output']>;
  /** Optional data about the video. */
  video_metadata: Maybe<Scalars['String']['output']>;
  /** Describes the video source. */
  video_provider: Maybe<Scalars['String']['output']>;
  /** The title of the video. */
  video_title: Maybe<Scalars['String']['output']>;
  /** The URL to the video. */
  video_url: Maybe<Scalars['String']['output']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice: Maybe<Price>;
};

/** Contains details of a product review. */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output'];
  /** The date the review was created. */
  created_at: Scalars['String']['output'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String']['output'];
  /** The review text. */
  text: Scalars['String']['output'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input'];
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String']['output'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  InStock = 'IN_STOCK',
  /** @deprecated  */
  OutOfStock = 'OUT_OF_STOCK'
}

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id: Maybe<Scalars['String']['output']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value: Maybe<Scalars['Float']['output']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty: Maybe<Scalars['Float']['output']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value: Maybe<Scalars['Float']['output']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains the results of a `products` query. */
export type Products = {
  __typename?: 'Products';
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count: Maybe<Scalars['Int']['output']>;
};


/** Contains the results of a `products` query. */
export type ProductsAggregationsArgs = {
  filter: InputMaybe<AggregationsFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  adyenPaymentMethods: Maybe<AdyenPaymentMethods>;
  adyenPaymentStatus: Maybe<AdyenPaymentStatus>;
  amBrandGetMoreFromThisBrandBlock: Maybe<MoreFromBrand>;
  ambrandlist: Maybe<BrandList>;
  ambrandslider: Maybe<BrandSlider>;
  /** Get a list of available store views and their config information. */
  availableStores: Maybe<Array<Maybe<StoreConfig>>>;
  /** Return information about the specified shopping cart. */
  cart: Maybe<Cart>;
  /** Return a list of categories that match the specified filter. */
  categories: Maybe<CategoryResult>;
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categoryList` instead.
   */
  category: Maybe<CategoryTree>;
  /** Return an array of categories based on the specified filters. */
  categoryList: Maybe<Array<Maybe<CategoryTree>>>;
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements: Maybe<Array<Maybe<CheckoutAgreement>>>;
  checkoutSessionConfig: Maybe<CheckoutSessionConfigOutput>;
  checkoutSessionDetails: Maybe<CheckoutSessionDetailsOutput>;
  checkoutSessionSignIn: Maybe<CheckoutSessionSignInOutput>;
  /** Return information about CMS blocks. */
  cmsBlocks: Maybe<CmsBlocks>;
  /** Return details about a CMS page. */
  cmsPage: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list. */
  compareList: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country: Maybe<Country>;
  /** Return information about the store's currency. */
  currency: Maybe<Currency>;
  /** Return the attribute type, given an attribute code and entity type. */
  customAttributeMetadata: Maybe<CustomAttributeMetadata>;
  /** Return detailed information about a customer account. */
  customer: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use the `customer` query instead. */
  customerOrders: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens: Maybe<CustomerPaymentTokens>;
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken: Maybe<PayflowLinkToken>;
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable: Maybe<IsEmailAvailableOutput>;
  /** Searches for Best Sellers information matches the filter. */
  mpSmtpBestsellers: Maybe<SmtpBestsellersOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations: Maybe<PickupLocations>;
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products: Maybe<Products>;
  /** Return the full details for a specified product, category, or CMS page. */
  route: Maybe<RoutableInterface>;
  /** Return details about the store's configuration. */
  storeConfig: Maybe<StoreConfig>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver: Maybe<EntityUrl>;
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist: Maybe<WishlistOutput>;
  /** An array of bestsellers products */
  xsearchBestsellerProducts: Maybe<XsearchProducts>;
  /** Landings matching customers' search query. */
  xsearchBlogs: Maybe<XsearchBlogs>;
  /** Brands matching customers' search query. */
  xsearchBrands: Maybe<XsearchBrands>;
  /** Resent search queries generated based on customer's searches. */
  xsearchBrowsingHistory: Maybe<XsearchSearches>;
  /** Categories matching customers' search query. */
  xsearchCategories: Maybe<XsearchCategories>;
  /** FAQ pages matching customers' search query. */
  xsearchFaqs: Maybe<XsearchFaqs>;
  /** Landings matching customers' search query. */
  xsearchLandings: Maybe<XsearchLandings>;
  /** Pages matching customers' search query. */
  xsearchPages: Maybe<XsearchPages>;
  /** Popular search queries generated based on customers' searches. */
  xsearchPopularSearches: Maybe<XsearchSearches>;
  /** Products matching customers' search query. */
  xsearchProducts: Maybe<XsearchProducts>;
  /** Recent search queries generated based on customers' searches. */
  xsearchRecentSearches: Maybe<XsearchSearches>;
  /** An array of recently viewed products */
  xsearchRecentlyViewed: Maybe<XsearchProducts>;
  /** Get related search terms by query. */
  xsearchRelatedTerms: Maybe<XsearchRelatedTerms>;
};


export type QueryAdyenPaymentMethodsArgs = {
  cart_id: Scalars['String']['input'];
  country: InputMaybe<Scalars['String']['input']>;
  shopper_locale: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdyenPaymentStatusArgs = {
  cartId: InputMaybe<Scalars['String']['input']>;
  orderNumber: InputMaybe<Scalars['String']['input']>;
};


export type QueryAmBrandGetMoreFromThisBrandBlockArgs = {
  productId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAmbrandlistArgs = {
  displayZero: InputMaybe<Scalars['Boolean']['input']>;
  imageHeight: InputMaybe<Scalars['Int']['input']>;
  imageWidth: InputMaybe<Scalars['Int']['input']>;
  showCount: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAmbrandsliderArgs = {
  displayZero: InputMaybe<Scalars['Boolean']['input']>;
  imageHeight: InputMaybe<Scalars['Int']['input']>;
  imageWidth: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<Scalars['String']['input']>;
};


export type QueryAvailableStoresArgs = {
  useCurrentGroup: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryListArgs = {
  filters: InputMaybe<CategoryFilterInput>;
};


export type QueryCheckoutSessionConfigArgs = {
  cartId: InputMaybe<Scalars['String']['input']>;
  omitPayloads: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCheckoutSessionDetailsArgs = {
  amazonSessionId: Scalars['String']['input'];
  queryTypes: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryCheckoutSessionSignInArgs = {
  buyerToken: Scalars['String']['input'];
};


export type QueryCmsBlocksArgs = {
  identifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCmsPageArgs = {
  id: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompareListArgs = {
  uid: Scalars['ID']['input'];
};


export type QueryCountryArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryMpSmtpBestsellersArgs = {
  filters: InputMaybe<MpFilters>;
};


export type QueryPickupLocationsArgs = {
  area: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productsInfo: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  sort: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ProductAttributeSortInput>;
};


export type QueryRouteArgs = {
  url: Scalars['String']['input'];
};


export type QueryUrlResolverArgs = {
  url: Scalars['String']['input'];
};


export type QueryXsearchBlogsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchBrandsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchCategoriesArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchFaqsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchLandingsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchPagesArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchPopularSearchesArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchProductsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryXsearchRelatedTermsArgs = {
  search: InputMaybe<Scalars['String']['input']>;
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

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  /** The cart after removing a coupon. */
  cart: Maybe<Cart>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  /** The cart after removing an item. */
  cart: Cart;
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output'];
};

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message. */
  message: Scalars['String']['output'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message: Maybe<GiftMessage>;
};

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** The specific page to return. */
  current_page: Maybe<Scalars['Int']['output']>;
  /** The maximum number of items to return per page of results. */
  page_size: Maybe<Scalars['Int']['output']>;
  /** The total number of pages in the response. */
  total_pages: Maybe<Scalars['Int']['output']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  /** The search suggestion of existing product. */
  search: Scalars['String']['output'];
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The type of selected bundle product option. */
  type: Scalars['String']['output'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']['output'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output'];
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display text for the option. */
  option_label: Scalars['String']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output'];
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display name of the selected value. */
  label: Scalars['String']['output'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String']['output'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** The purchase order number. */
  purchase_order_number: Maybe<Scalars['String']['output']>;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output'];
  /** The label for the method code. */
  method_title: Scalars['String']['output'];
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  /** An array containing information about each recipient. */
  recipients: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  /** The email address of the recipient. */
  email: Scalars['String']['output'];
  /** The name of the recipient. */
  name: Scalars['String']['output'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input'];
  /** The name of the recipient. */
  name: Scalars['String']['input'];
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  /** The email address of the sender. */
  email: Scalars['String']['output'];
  /** The text of the message to be sent. */
  message: Scalars['String']['output'];
  /** The name of the sender. */
  name: Scalars['String']['output'];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input'];
  /** The text of the message to be sent. */
  message: Scalars['String']['input'];
  /** The name of the sender. */
  name: Scalars['String']['input'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output'];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  /** The cart after setting the billing address. */
  cart: Cart;
};

export type SetCustomerLinkOutput = {
  __typename?: 'SetCustomerLinkOutput';
  customer_bearer_token: Maybe<Scalars['String']['output']>;
  customer_email: Maybe<Scalars['String']['output']>;
  customer_firstname: Maybe<Scalars['String']['output']>;
  customer_id: Maybe<Scalars['String']['output']>;
  customer_last: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  success: Maybe<Scalars['Boolean']['output']>;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The email address of the guest. */
  email: Scalars['String']['input'];
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  /** The cart after setting the guest email. */
  cart: Cart;
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  Separately = 'SEPARATELY',
  /** @deprecated  */
  Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output'];
  /** The tracking number of the order shipment. */
  number: Maybe<Scalars['String']['output']>;
  /** The shipment tracking title. */
  title: Scalars['String']['output'];
};

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

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight: Maybe<Scalars['Float']['output']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  pickup_location_code: Maybe<Scalars['String']['output']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount. */
  amount: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax. */
  amount_excluding_tax: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input'];
};

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type SmtpBestsellersOutput = {
  __typename?: 'SmtpBestsellersOutput';
  /** Bestsellers Product Information. */
  mpBestsellers: Maybe<Array<Maybe<BestsellersProductOutput>>>;
};

/** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  /** @deprecated  */
  Asc = 'ASC',
  /** @deprecated  */
  Desc = 'DESC'
}

/** Defines a possible sort field. */
export type SortField = {
  __typename?: 'SortField';
  /** The label of the sort field. */
  label: Maybe<Scalars['String']['output']>;
  /** The attribute code of the sort field. */
  value: Maybe<Scalars['String']['output']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** The default sort field value. */
  default: Maybe<Scalars['String']['output']>;
  /** An array of possible sort fields. */
  options: Maybe<Array<Maybe<SortField>>>;
};

/** The type contains information about a store config. */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer: Maybe<Scalars['String']['output']>;
  /** Adyen front end resources region. */
  adyen_checkout_frontend_region: Maybe<Scalars['String']['output']>;
  /** Adyen client key for LIVE environment. */
  adyen_client_key_live: Maybe<Scalars['String']['output']>;
  /** Adyen client key for TEST environment. */
  adyen_client_key_test: Maybe<Scalars['String']['output']>;
  /** Adyen demo mode enabled (TEST). */
  adyen_demo_mode: Maybe<Scalars['Boolean']['output']>;
  /** Adyen card holder's name is visible. */
  adyen_has_holder_name: Maybe<Scalars['Boolean']['output']>;
  /** Adyen card holder's name is required. */
  adyen_holder_name_required: Maybe<Scalars['Boolean']['output']>;
  /** Adyen Return path in case of error */
  adyen_return_path_error: Maybe<Scalars['String']['output']>;
  /** Adyen Render Mode for Payment Method. */
  adyen_title_renderer: Maybe<Scalars['String']['output']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items: Maybe<Scalars['String']['output']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Bestsellers Block Enabled */
  amasty_xsearch_bestsellers_enabled: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Bestsellers Block Limit */
  amasty_xsearch_bestsellers_limit: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Bestsellers Block Position */
  amasty_xsearch_bestsellers_position: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Bestsellers Block Title */
  amasty_xsearch_bestsellers_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Blog Config Content Length. */
  amasty_xsearch_blog_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Blog Config Enabled. */
  amasty_xsearch_blog_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Blog Max Results. */
  amasty_xsearch_blog_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Blog Config Content Heading Length. */
  amasty_xsearch_blog_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Blog Config Position. */
  amasty_xsearch_blog_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Blog Config Title. */
  amasty_xsearch_blog_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Brands Config Content Length. */
  amasty_xsearch_brand_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Brands Config Enabled. */
  amasty_xsearch_brand_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Brands Max Results. */
  amasty_xsearch_brand_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Brands Config Content Heading Length. */
  amasty_xsearch_brand_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Brands Config Position. */
  amasty_xsearch_brand_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Brands Config Title. */
  amasty_xsearch_brand_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Browsing History Config Enabled. */
  amasty_xsearch_browsing_history_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Browsing History Config Show on First Click. */
  amasty_xsearch_browsing_history_first_click: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Browsing History Config Max Results. */
  amasty_xsearch_browsing_history_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Browsing History Config Position. */
  amasty_xsearch_browsing_history_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Browsing History Config Title. */
  amasty_xsearch_browsing_history_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Categories Config Description Length. */
  amasty_xsearch_category_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Categories Config Enabled. */
  amasty_xsearch_category_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Categories Config Display Full Category Path. */
  amasty_xsearch_category_full_path: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Categories Max Results. */
  amasty_xsearch_category_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Categories Config Name Length. */
  amasty_xsearch_category_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Categories Config Position. */
  amasty_xsearch_category_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Categories Config Title. */
  amasty_xsearch_category_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch FAQ Question Config Content Length. */
  amasty_xsearch_faq_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch FAQ Question Config Enabled. */
  amasty_xsearch_faq_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch FAQ Question Max Results. */
  amasty_xsearch_faq_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch FAQ Question Config Content Heading Length. */
  amasty_xsearch_faq_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch FAQ Question Config Position. */
  amasty_xsearch_faq_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch FAQ Question Config Title. */
  amasty_xsearch_faq_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch General Config Search Field Width. */
  amasty_xsearch_general_dynamic_search_width: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch General Config Enable Tabs on the Search Result Page. */
  amasty_xsearch_general_enable_tabs_search_result: Maybe<Scalars['Boolean']['output']>;
  /** Enable Redirect from 404 to Search Results. */
  amasty_xsearch_general_four_zero_four_redirect: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch General Config Min Characters. */
  amasty_xsearch_general_min_chars: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch General Config Popup Width (px). */
  amasty_xsearch_general_popup_width: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch General Config Show Related Search Queries in Search Results. */
  amasty_xsearch_general_show_related_terms: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch General Config Show Related Search Queries Result Numbers. */
  amasty_xsearch_general_show_related_terms_results: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Landing Pages Config Content Length. */
  amasty_xsearch_landing_page_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Landing Page Config Enabled. */
  amasty_xsearch_landing_page_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Landing Page Max Results. */
  amasty_xsearch_landing_page_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Landing Pages Config Content Heading Length. */
  amasty_xsearch_landing_page_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Landing Page Config Position. */
  amasty_xsearch_landing_page_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Landing Page Config Title. */
  amasty_xsearch_landing_page_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Background. */
  amasty_xsearch_layout_background: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Border. */
  amasty_xsearch_layout_border: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Enabled. */
  amasty_xsearch_layout_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Custom Layout Config Highlight. */
  amasty_xsearch_layout_highlight: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Hover. */
  amasty_xsearch_layout_hover: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Hover Text. */
  amasty_xsearch_layout_hover_text: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Custom Layout Config Text. */
  amasty_xsearch_layout_text: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch CMS Page Config Content Length. */
  amasty_xsearch_page_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch CMS Page Config Enabled. */
  amasty_xsearch_page_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch CMS Page Max Results. */
  amasty_xsearch_page_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch CMS Page Config Content Heading Length. */
  amasty_xsearch_page_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch CMS Page Config Position. */
  amasty_xsearch_page_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch CMS Page Config Title. */
  amasty_xsearch_page_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Popular Searches Config Enabled. */
  amasty_xsearch_popular_searches_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Popular Searches Config Show on First Click. */
  amasty_xsearch_popular_searches_first_click: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Popular Searches Config Max Results. */
  amasty_xsearch_popular_searches_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Popular Searches Config Position. */
  amasty_xsearch_popular_searches_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Popular Searches Config Title. */
  amasty_xsearch_popular_searches_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Products Config Enable 'Add to Cart' button. */
  amasty_xsearch_product_add_to_cart: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Products Config Short Description Length. */
  amasty_xsearch_product_desc_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Products Config Enabled. */
  amasty_xsearch_product_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Products Config Max Results. */
  amasty_xsearch_product_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Products Config Name Length. */
  amasty_xsearch_product_name_length: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Products Config Position. */
  amasty_xsearch_product_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Products Config Redirect to Product Page. */
  amasty_xsearch_product_redirect_single_product: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Products Config Show reviews. */
  amasty_xsearch_product_reviews: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Products Config Title. */
  amasty_xsearch_product_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Recent Searches Config Enabled. */
  amasty_xsearch_recent_searches_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Recent Searches Config Show on First Click. */
  amasty_xsearch_recent_searches_first_click: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Xsearch Recent Searches Config Max Results. */
  amasty_xsearch_recent_searches_limit: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Recent Searches Config Position. */
  amasty_xsearch_recent_searches_position: Maybe<Scalars['Int']['output']>;
  /** Amasty Xsearch Recent Searches Config Title. */
  amasty_xsearch_recent_searches_title: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Recently Viewed products Enabled. */
  amasty_xsearch_recently_viewed_enabled: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Recently Viewed limit */
  amasty_xsearch_recently_viewed_limit: Maybe<Scalars['String']['output']>;
  /** Amasty Xsearch Recently Viewed products block titile */
  amasty_xsearch_recently_viewed_title: Maybe<Scalars['String']['output']>;
  /** Amasty Brands Menu Item Label. */
  amshopby_brand_general_menu_item_label: Maybe<Scalars['String']['output']>;
  /** Amasty Add Brands Link to Top Menu. */
  amshopby_brand_general_topmenu_enabled: Maybe<Scalars['Boolean']['output']>;
  /** Amasty Brand Listing Logo Height. */
  amshopby_brand_listing_brand_logo_height: Maybe<Scalars['Int']['output']>;
  /** Amasty Brand Listing Logo Width. */
  amshopby_brand_listing_brand_logo_width: Maybe<Scalars['Int']['output']>;
  /** Amasty Product Page Brand Logo Height. */
  amshopby_brand_product_page_height: Maybe<Scalars['Int']['output']>;
  /** Amasty Product Page Brand Logo Width. */
  amshopby_brand_product_page_width: Maybe<Scalars['Int']['output']>;
  /** Leave the Single-Select Filter Visible after Selection. */
  amshopby_general_keep_single_choice_visible: Maybe<Scalars['Boolean']['output']>;
  /** Slider Style. */
  amshopby_general_unfolded_options_state: Maybe<Scalars['Int']['output']>;
  /** Slider Style. */
  amshopby_slider_slider_style: Maybe<Scalars['String']['output']>;
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront: Maybe<Scalars['Boolean']['output']>;
  /** The base currency code. */
  base_currency_code: Maybe<Scalars['String']['output']>;
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url: Maybe<Scalars['String']['output']>;
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified base URL. */
  base_url: Maybe<Scalars['String']['output']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active: Maybe<Scalars['String']['output']>;
  /** The default sort order of the search results list. */
  catalog_default_sort_by: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>;
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled: Maybe<Scalars['Boolean']['output']>;
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to: Maybe<Scalars['String']['output']>;
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total: Maybe<Scalars['String']['output']>;
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total: Maybe<Scalars['String']['output']>;
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries: Maybe<Scalars['String']['output']>;
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order: Maybe<Scalars['Int']['output']>;
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title: Maybe<Scalars['String']['output']>;
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies: Maybe<Scalars['String']['output']>;
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route: Maybe<Scalars['String']['output']>;
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source: Maybe<Scalars['String']['output']>;
  /** The copyright statement that appears at the bottom of each page. */
  copyright: Maybe<Scalars['String']['output']>;
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description: Maybe<Scalars['String']['output']>;
  /** The default display currency code. */
  default_display_currency_code: Maybe<Scalars['String']['output']>;
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords: Maybe<Scalars['String']['output']>;
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title: Maybe<Scalars['String']['output']>;
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice: Maybe<Scalars['Int']['output']>;
  /** The landing page that is associated with the base URL. */
  front: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in Grid View. */
  grid_per_page: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values: Maybe<Scalars['String']['output']>;
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes: Maybe<Scalars['String']['output']>;
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon: Maybe<Scalars['String']['output']>;
  /** The path to the logo that appears in the header. */
  header_logo_src: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group: Maybe<Scalars['Boolean']['output']>;
  /** The format of the search results list. */
  list_mode: Maybe<Scalars['String']['output']>;
  /** The default number of products per page in List View. */
  list_per_page: Maybe<Scalars['Int']['output']>;
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values: Maybe<Scalars['String']['output']>;
  /** The store locale. */
  locale: Maybe<Scalars['String']['output']>;
  /** The Alt text that is associated with the logo. */
  logo_alt: Maybe<Scalars['String']['output']>;
  /** The height of the logo image, in pixels. */
  logo_height: Maybe<Scalars['Int']['output']>;
  /** The width of the logo image, in pixels. */
  logo_width: Maybe<Scalars['Int']['output']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled: Maybe<Scalars['String']['output']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length: Maybe<Scalars['String']['output']>;
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route: Maybe<Scalars['String']['output']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active: Maybe<Scalars['String']['output']>;
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled: Maybe<Scalars['String']['output']>;
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix: Maybe<Scalars['String']['output']>;
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number: Maybe<Scalars['String']['output']>;
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid: Maybe<Scalars['ID']['output']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>;
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url: Maybe<Scalars['String']['output']>;
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url: Maybe<Scalars['String']['output']>;
  /** The store’s fully-qualified secure base URL. */
  secure_base_url: Maybe<Scalars['String']['output']>;
  /** Email to a Friend configuration. */
  send_friend: Maybe<SendFriendConfiguration>;
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code: Maybe<Scalars['ID']['output']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code: Maybe<Scalars['ID']['output']>;
  /** The label assigned to the store group. */
  store_group_name: Maybe<Scalars['String']['output']>;
  /** The label assigned to the store view. */
  store_name: Maybe<Scalars['String']['output']>;
  /** The store view sort order. */
  store_sort_order: Maybe<Scalars['Int']['output']>;
  /** The time zone of the store. */
  timezone: Maybe<Scalars['String']['output']>;
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix: Maybe<Scalars['String']['output']>;
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator: Maybe<Scalars['String']['output']>;
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix: Maybe<Scalars['String']['output']>;
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url: Maybe<Scalars['Boolean']['output']>;
  /** The unique ID for the website. */
  website_code: Maybe<Scalars['ID']['output']>;
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id: Maybe<Scalars['Int']['output']>;
  /** The label assigned to the website. */
  website_name: Maybe<Scalars['String']['output']>;
  /** The unit of weight. */
  weight_unit: Maybe<Scalars['String']['output']>;
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome: Maybe<Scalars['String']['output']>;
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled: Maybe<Scalars['Boolean']['output']>;
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status: Maybe<Scalars['String']['output']>;
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries: Maybe<Scalars['String']['output']>;
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order: Maybe<Scalars['Int']['output']>;
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title: Maybe<Scalars['String']['output']>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block. */
  position: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages: Maybe<Scalars['Boolean']['output']>;
};

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** The status of the subscription request. */
  status: Maybe<SubscriptionStatusesEnum>;
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

/** Describes the swatch type and a value. */
export type SwatchData = {
  __typename?: 'SwatchData';
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type: Maybe<Scalars['String']['output']>;
  /** The value for the swatch item. It could be text or an image link. */
  value: Maybe<Scalars['String']['output']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>;
  /** Data required to render a swatch filter item. */
  swatch_data: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data: Maybe<SwatchData>;
};

/** Contains tax item details. */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output'];
  /** A title that describes the tax. */
  title: Scalars['String']['output'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity: Maybe<Scalars['Float']['output']>;
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  /** The cart after updating products. */
  cart: Cart;
};

export type UpdateCheckoutSessionOutput = {
  __typename?: 'UpdateCheckoutSessionOutput';
  redirectUrl: Maybe<Scalars['String']['output']>;
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** An array of request parameters. */
  parameters: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  Category = 'CATEGORY',
  /** @deprecated  */
  CmsPage = 'CMS_PAGE',
  /** @deprecated  */
  Product = 'PRODUCT'
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum UseInLayeredNavigationOptions {
  /** @deprecated  */
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  /** @deprecated  */
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  /** @deprecated  */
  No = 'NO'
}

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input'];
};

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  acabado_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  acc_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activa_pasiva: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adat: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  adecuado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  admite_modulo_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aesebu: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  afinacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aftertouch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ajuste_atackrelease: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_electrica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentacion_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_externo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  alimentador_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_activos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  altavoces_guitarra_bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  am_offer_item_condition: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  anillos_desplazables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  app_de_control: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aros_y_fondo_macizo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  arpegiador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  atril: Maybe<Scalars['Int']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  audio_in_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  autoamplificado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  automatico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aux_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_de_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bandas_eq: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bass_reflex: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bloqueo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bluetooth_vers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brazo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bus_powered: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cable_intercambiable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_base: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  calibre_rango: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  camara: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canal_llamadas_tlf: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cancelacion_ruido: Maybe<Scalars['Int']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  capsula: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clase_de_etapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  codecs_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acond_acust: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_acordeon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_guit_elect: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_mics: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_piano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  color_textil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compatible_con: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  compresor_limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_metronomo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_sonajas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  con_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_para_caja_de_escenario_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conector_sustain: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conectores: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_footswitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conexion_salida_master: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_altavoces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  configuracion_de_pastillas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  construccion_guit: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  control_volumen: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_delanteros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  controles_giratorios: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  conversor_ad_da: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  correccion_de_frecuencia_manual: Maybe<Scalars['Int']['output']>;
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>;
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cst: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_posic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerda_suelta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cuerpo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cutaway_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decksaver_para: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diametro_plato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diapason: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digitacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  disenado_para: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diseno_trapezoidal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dispo: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diversity_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  doble_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  drive_agudos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dual: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dureza_maza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  efectos_dsp_internos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  electronica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  enracable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entorchado_3_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_audio_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_digital: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_jack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_minijack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_rca: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entrada_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_intrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_phono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  entradas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_digitales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  es_para_efectos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ethernet: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  extremos_acodados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fabricante: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  figura: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_ajustable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filtro_paso_alto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fondo_flameado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  footswitch_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  formato_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frecuencia_muestreo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_layer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_medio_pedal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_split: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funcion_suma: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_a_pilas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_como_mezcladora: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_bateria_externa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_con_baterias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funciona_sin_pcusb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  funda: Maybe<Scalars['Int']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_a_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grabacion_multipista: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grip: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  habilitado: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hotspot_wifi: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  iluminacion: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  impedancia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incl_soportes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_afinador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_amplificador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_antiviento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_apoyo_hombro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_arco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_baquetas_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_barbada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_capsula_y_aguja: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_correa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_herrajes_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_mic_inalambrico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pedal_bombo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pie_hihat_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_platos_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_pua: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_rack_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_sillin_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_soporte_caja_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_suspension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  incluye_tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interfaz_de_usuario: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  interruptor_onoff: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbstock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jirafa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  jogwheel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  juego_completo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lector_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  limitador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  longitud_escala: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mango_de_madera_ss: Maybe<Scalars['Int']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  master_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mastil: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_absorbente: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_baqueta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cabeza_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_casco: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_castanyuela: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_cuerda: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_escobilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_fabricacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_recinto: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_soporte2: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material_tejido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mazas_para: Maybe<Scalars['Int']['output']>;
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medidor_nivel: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_de_soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  medio_juego: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mesa_de_mezclas: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  metal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mezclador_interno: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mic_in: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  microfonos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_din_5: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_por_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  midi_thru: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  modelado_amp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  monitor_out: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  mono_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  montaje_en_rack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  motor_de_sonidos: Maybe<Scalars['Int']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  novedad: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_canales_estereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_cuerdas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_aux: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_bajos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_canales_digitales_dsp: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_faders: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_lenguetas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_previos_de_microfono: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclados: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_teclas_botones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_vias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_de_woofers: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_stereo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_entradas_xlr: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_estilos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_piezas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_registros: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_analogicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_salidas_l_r: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_sonidos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_voces: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  num_zonas_split: Maybe<Scalars['Int']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pack: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pads: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantalla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pantallas_lcd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_bateria: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_camaras: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_instrumentos_de_viento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_ninos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  para_voz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pastilla_acustica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_mic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patron_polar: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  patrones_conmutables: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pc_tablet_smartphone: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pedal_expresion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  peine: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pfl: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  phantom_power: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  piccolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pistones: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pitch_bend: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polaridad_conmutable: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  polifonia_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  posicion_pastilla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  potencia_para_4_ohmscanal: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previo_ss: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  previos_mic: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  procesadores_de_efectos: Maybe<Scalars['Int']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  proteccion_magnetica: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  protocolo_conexion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  puerta: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  punta_de_nylon: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_frecuencias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_impedancias: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_peso: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_altavoz: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rango_potencia_ampg: Maybe<Scalars['Int']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rec_out: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  registro: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  regulador_volumen_por_canal: Maybe<Scalars['Int']['output']>;
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_bluetooth: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_grabador_integrado_via_usb_sd: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  reproductor_usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  resolucion_bits: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respaldo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  respuesta_en_frecuencia: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  retractil: Maybe<Scalars['Int']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  ritmos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  rueda_modulacion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ruedas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_auriculares: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_di: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_directa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salida_linea: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_audio: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_fisicas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  salidas_totales: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampler: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sampling: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  seccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  secuenciador_groove: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  senal_stereo_wireless: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  send_return: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sendreturn: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sensible_al_tacto: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  signature: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_electronico: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sistema_portatil: Maybe<Scalars['Int']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  smpte_timecode: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  so_compatible: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_aprendizaje: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_de_trabajo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  software_incluido: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  soporte: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spdif: Maybe<Scalars['Int']['output']>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  spl_max: Maybe<Scalars['Int']['output']>;
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrave: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subgrupos: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  subwoofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sujecion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  suspendido: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talk_over: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talkback: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  talla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_bombo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_cono_de_graves: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_num: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamano_woofer: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_guitarra: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tamanyo_instrumento: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tapa_maciza: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_de_madera: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  teclas_luminosas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tension: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tercera_entorchada: Maybe<Scalars['Int']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_acondic: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_ampli: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_controlador: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_emisor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_modulo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_pie: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_receptor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_de_tecla: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_equipo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_estuche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tipo_parche: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tonalidad: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  traccion: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  transmision: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trastes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tremolo_1: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  tripodes: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  trompeta_agudos: Maybe<Scalars['Int']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>;
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_dispositivo: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_a_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  usb_host: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  valvulas: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_batucada: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  variedad_tambor: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  vaso_de_montaje: Maybe<Scalars['Int']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  word_clock: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  work_clock: Maybe<Scalars['Int']['output']>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code: Maybe<Scalars['String']['output']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default: Maybe<Scalars['Boolean']['output']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name: Maybe<Scalars['String']['output']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order: Maybe<Scalars['Int']['output']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** A list of possible error types. */
export enum WishListUserInputErrorType {
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains a customer wish list. */
export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object. */
  id: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `items_v2` field instead. */
  items: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count: Maybe<Scalars['Int']['output']>;
  /** An array of items in the customer's wish list. */
  items_v2: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code: Maybe<Scalars['String']['output']>;
  /** The time of the last modification to the wish list. */
  updated_at: Maybe<Scalars['String']['output']>;
};


/** Contains a customer wish list. */
export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output'];
};

/** A list of possible error types. */
export enum WishlistCartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains details about a wish list item. */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list. */
  added_at: Maybe<Scalars['String']['output']>;
  /** The customer's comment about this item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItem` object. */
  id: Maybe<Scalars['Int']['output']>;
  /** Details about the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty: Maybe<Scalars['Float']['output']>;
};

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input'];
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>;
};

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count: Maybe<Scalars['Int']['output']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name: Maybe<Scalars['String']['output']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code: Maybe<Scalars['String']['output']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at: Maybe<Scalars['String']['output']>;
};

/** Object that contains all suggested blog data. */
export type XsearchBlog = {
  __typename?: 'XsearchBlog';
  /** Blog description. */
  description: Maybe<Scalars['String']['output']>;
  /** Blog name. */
  name: Maybe<Scalars['String']['output']>;
  /** Blog title. */
  title: Maybe<Scalars['String']['output']>;
  /** Blog URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of suggested blogs. */
export type XsearchBlogs = {
  __typename?: 'XsearchBlogs';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested blogs. */
  items: Maybe<Array<Maybe<XsearchBlog>>>;
  /** Number of blogs returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains all suggested brand data. */
export type XsearchBrand = {
  __typename?: 'XsearchBrand';
  /** Brand name. */
  name: Maybe<Scalars['String']['output']>;
  /** Brand title. */
  title: Maybe<Scalars['String']['output']>;
  /** Brand URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of suggested brands. */
export type XsearchBrands = {
  __typename?: 'XsearchBrands';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested brands. */
  items: Maybe<Array<Maybe<XsearchBrand>>>;
  /** Number of brands returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains list of suggested categories. */
export type XsearchCategories = {
  __typename?: 'XsearchCategories';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested categories. */
  items: Maybe<Array<Maybe<XsearchCategory>>>;
  /** Number of categories returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains all suggested category data. */
export type XsearchCategory = {
  __typename?: 'XsearchCategory';
  /** Category description. */
  description: Maybe<Scalars['String']['output']>;
  /** Category name as entered value. */
  name: Maybe<Scalars['String']['output']>;
  /** Category URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains all suggested FAQ page data. */
export type XsearchFaq = {
  __typename?: 'XsearchFaq';
  /** FAQ page name. */
  name: Maybe<Scalars['String']['output']>;
  /** FAQ page title. */
  title: Maybe<Scalars['String']['output']>;
  /** FAQ page URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of suggested FAQ pages. */
export type XsearchFaqs = {
  __typename?: 'XsearchFaqs';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested FAQ pages. */
  items: Maybe<Array<Maybe<XsearchFaq>>>;
  /** Number of FAQ pages returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains all suggested landing page data. */
export type XsearchLanding = {
  __typename?: 'XsearchLanding';
  /** Landing page name. */
  name: Maybe<Scalars['String']['output']>;
  /** Landing page title. */
  title: Maybe<Scalars['String']['output']>;
  /** Landing page URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of suggested landing pages. */
export type XsearchLandings = {
  __typename?: 'XsearchLandings';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested landing pages. */
  items: Maybe<Array<Maybe<XsearchLanding>>>;
  /** Number of landing pages returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains all suggested page data. */
export type XsearchPage = {
  __typename?: 'XsearchPage';
  /** Page description. */
  description: Maybe<Scalars['String']['output']>;
  /** Page name. */
  name: Maybe<Scalars['String']['output']>;
  /** Page title. */
  title: Maybe<Scalars['String']['output']>;
  /** Page URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of suggested pages. */
export type XsearchPages = {
  __typename?: 'XsearchPages';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of suggested pages. */
  items: Maybe<Array<Maybe<XsearchPage>>>;
  /** Number of pages returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

export type XsearchProduct = {
  __typename?: 'XsearchProduct';
  /** The attribute set assigned to the product. */
  attribute_set_id: Maybe<Scalars['Int']['output']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url: Maybe<Scalars['String']['output']>;
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** Timestamp indicating when the product was created. */
  created_at: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>;
  /** Indicates whether a gift message is available. */
  gift_message_available: Maybe<Scalars['String']['output']>;
  /** The ID number assigned to the product. */
  id: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>;
  /** Is product salable */
  is_salable: Maybe<Scalars['Boolean']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer: Maybe<Scalars['Int']['output']>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of ProductLinks objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** Product rating. */
  rating_summary: Maybe<Scalars['Int']['output']>;
  /** Product reviews count. */
  reviews_count: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>;
  /** The end date that a product has a special price. */
  special_to_date: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id: Maybe<Scalars['String']['output']>;
  /** Timestamp indicating when the product was updated. */
  updated_at: Maybe<Scalars['String']['output']>;
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>;
};

/** Object that contains list of products. */
export type XsearchProducts = {
  __typename?: 'XsearchProducts';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of found products. */
  items: Maybe<Array<Maybe<XsearchProduct>>>;
  /** Number of products returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Object that contains all related term data. */
export type XsearchRelatedTerm = {
  __typename?: 'XsearchRelatedTerm';
  /** Term count. */
  count: Maybe<Scalars['Int']['output']>;
  /** Term name as entered value. */
  name: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of related terms. */
export type XsearchRelatedTerms = {
  __typename?: 'XsearchRelatedTerms';
  /** An array of related terms. */
  items: Maybe<Array<Maybe<XsearchRelatedTerm>>>;
};

/** Object that contains all search data. */
export type XsearchSearch = {
  __typename?: 'XsearchSearch';
  /** Search name as entered value. */
  name: Maybe<Scalars['String']['output']>;
  /** Results number of search. */
  num_results: Maybe<Scalars['String']['output']>;
  /** Search url as entered value. */
  url: Maybe<Scalars['String']['output']>;
};

/** Object that contains list of searches. */
export type XsearchSearches = {
  __typename?: 'XsearchSearches';
  /** Part of setting path for getting item configuration. */
  code: Maybe<Scalars['String']['output']>;
  /** An array of searches. */
  items: Maybe<Array<Maybe<XsearchSearch>>>;
  /** Number of searches returned. */
  total_count: Maybe<Scalars['Int']['output']>;
};

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']['input']>;
};

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
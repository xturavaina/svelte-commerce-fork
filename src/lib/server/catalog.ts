import { sdk } from '$lib/server/magento'

// TODO: Limit to 1 result
// TODO: Get more price info
// TODO: Get reviews
// TODO: Get variants in another query?
// TODO: Sort configurable options by position
export async function getProduct(sku: string) {
  const { products } = await sdk.getProducts({ sku })
  return products?.items ? products.items[0] : null
}

export async function getCategory(urlKey: string) {
  const { categories } = await sdk.getCategories({ urlKey })
  return categories?.items ? categories.items[0] : null
}

export async function getCategoryProducts(id: number) {
  console.log("Category ID being passed:", id);
  const { category } = await sdk.getCategoryProducts({ id })
  return category?.products ?? []
}

export async function getNavCategories() {
  console.log("Category ID being passed:");
  const { categories } = await sdk.getNavCategories()
  return categories!
}

interface Toolbar {
  pageSize: number
  currentPage: number
  sortOrder: string
  sortDirection: string
}

export async function searchProducts(
  query: string,
  { pageSize, currentPage, sortOrder, sortDirection }: Toolbar
) {
  const { products } = await sdk.searchProducts({
    query,
    pageSize: pageSize ?? 16,
    currentPage: currentPage ?? 1,
    sort: {
      [sortOrder ?? 'relevance']: sortDirection?.toUpperCase() ?? 'ASC',
    },
  })

  return products!
}

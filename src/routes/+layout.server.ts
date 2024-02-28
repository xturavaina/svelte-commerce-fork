import { sdk } from "$lib/server/magento";
import type { ReferenceLink } from "$lib/types/helpers";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals }) => {
  const { categories: base } = await sdk.getNavCategories();

  const categories = base.items[0].children;

  return {
    head: {
      title: locals.storeConfig.default_title,
      description: locals.storeConfig.default_description,
      keywords: locals.storeConfig.default_keywords,
    },
    logo: {
      src: locals.storeConfig.header_logo_src,
      width: locals.storeConfig.logo_width,
      height: locals.storeConfig.logo_height,
    },
    footer: {
      copyright: locals.storeConfig.copyright,
    },
    customer: locals.customer,
    cart: locals.cart,
    messages: [],
    navigationItems: categories.map<ReferenceLink>((category) => {
      return {
        text: category.category_abbrv ?? category.name,
        href: category.url_path,
      };
    }),
  };
};


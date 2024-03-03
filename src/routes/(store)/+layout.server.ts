import { sdk } from "$lib/server/magento"
import type { ReferenceLink } from "$lib/types/helpers"
import type { ServerLoad } from "@sveltejs/kit"

export const load: ServerLoad = async ({ locals }) => {
  // Obtiene las categorías de navegación desde el SDK de Magento
  const { categories: base } = await sdk.getNavCategories()
  const categories = base.items[0].children

  // Devuelve los datos necesarios para el cliente, incluyendo los elementos de navegación
  return {
    // Otros datos necesarios para la tienda pueden ser incluidos aquí
    navigationItems: categories.map<ReferenceLink>((category) => ({
      text: category.category_abbrv ?? category.name,
      href: category.url_path,
    })),
    // Asegúrate de devolver también cualquier otro dato necesario para la tienda
  };
};


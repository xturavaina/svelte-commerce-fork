import { sdk } from "$lib/server/magento";
import tableToJson from "$lib/helpers/table-to-json";
import he from "he";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    // Llamada a obtener los bloques CMS
    const response = await sdk.getCMSBlocks({
      identifier: "home-slider-top",
    });

    const { cmsBlocks: homeSliderBlock } = response;

    if (homeSliderBlock && homeSliderBlock.items && homeSliderBlock.items.length > 0) {
      const content = homeSliderBlock.items[0].content;

      // Decodificar el HTML
      const decodedHTML = he.decode(content);

      // Convertir la tabla HTML a JSON
      const homeSliderRawData: any[] = tableToJson(decodedHTML, true);

      console.log("Home slider raw data:", homeSliderRawData);

      // Mapear los datos a la estructura necesaria para el slider
      const topSliders = homeSliderRawData.map((headerSlide: any) => {
        return {
          href: headerSlide["Enlace botón"],
          img: headerSlide["Imagen fondo"],
          mobileImg: headerSlide["Imagen fondo (móvil)"],
          title: headerSlide["Título"],
          buttonText: headerSlide["Texto botón"],
          description: headerSlide["Descripción"],
        };
      });

      return {
        topSliderData: topSliders,
      };
    } else {
      console.error("No CMS blocks found or the blocks are empty.");
      return {
        topSliderData: [],
      };
    }
  } catch (error) {
    console.error("Error fetching CMS blocks:", error);
    return {
      topSliderData: [],
    };
  }
};

// src/routes/(store)/(home)/+page.server.ts

import tableToJson from "$lib/helpers/table-to-json";
import { sdk } from "$lib/server/magento";
import { getNavCategories } from "$lib/server/catalog";
import type {
  BrandData,
  BrandRawData,
  bannerSlideInformationData, 
  CarouselProduct,
  CategoryReference,
  SliderRawData,
} from "$lib/types/helpers";
import he from "he";

export async function load() {
  // Categories
  const { items } = await getNavCategories();
  console.log("Categories response:", items);

  // Verificar si categories y items están definidos y si hay al menos un item
  if (!items || items.length === 0 || !items[0].children) {
    console.warn("No categories or children found in the response");
    return {
      categories: [],  // Devuelve una lista vacía de categorías
      topSliderData: [],
      bottomSlider: [],
      recommendedProducts: [],
      newProducts: [],
      liquidationsProducts: [],
      opportunityProducts: [],
      brandData: [],
    };
  }

  const categoryReferences = items[0].children.map((category) => {
    return {
      href: `${category.url_path}`,
      img: `https://www.unionmusical.es/media/images/cache/catalog/category/120x120/${category.thumbnail}`,
      title: category.name,
    } as CategoryReference;
  }) || [];

  // Top Slider
  const response = await sdk.getCMSBlocks({
    identifier: "home-slider-top",
  });

  const { cmsBlocks: homeSliderBlock } = response;

  let topSliders: bannerSlideInformationData[] = [];

  if (homeSliderBlock && homeSliderBlock.items && homeSliderBlock.items.length > 0) {
    const content = homeSliderBlock.items[0].content;

    // Decodificar el HTML
    const decodedHTML = he.decode(content);

    // Convertir la tabla HTML a JSON
    const homeSliderRawData = tableToJson(decodedHTML, true) as SliderRawData[];

    console.log("Home slider raw data:", homeSliderRawData);

    // Mapear los datos a la estructura necesaria para el slider
    topSliders = homeSliderRawData.map((headerSlide) => {
      return {
        href: headerSlide["Enlace botón"],
        img: headerSlide["Imagen fondo"],
        mobileImg: headerSlide["Imagen fondo (móvil)"],
        title: headerSlide["Título"],
        buttonText: headerSlide["Texto botón"],
        description: headerSlide["Descripción"],
      } as bannerSlideInformationData;
    });
  } else {
    console.warn("No top slider data found");
  }

  // Brands
  const { cmsBlocks: brandListBlock } = await sdk.getCMSBlocks({
    identifier: "featured-brands",
  });

  let brandsData: BrandData[] = [];

  if (brandListBlock && brandListBlock.items && brandListBlock.items.length > 0) {
    const content = brandListBlock.items[0].content;
    const decodedHTML = he.decode(content);
    let brandsRawData = tableToJson(decodedHTML, true) as BrandRawData[];

    brandsData = brandsRawData.map((brand) => {
      return {
        name: brand.Nombre,
        logo: brand.Logo,
        url: brand.URL,
      } as BrandData;
    });
  } else {
    console.warn("No brand data found");
  }

  // Recommendations
  const { products: recommendedProducts } = await sdk.getRecommendedProducts();

  const recommendations = recommendedProducts.items
    .slice(0, 8)
    .map((product) => {
      const name = product.name;
      const amount = product.price.regularPrice.amount.value;
      const currency = product.price.regularPrice.amount.currency;
      const category = product.categories.slice(-1)[0].name;
      const href = `/${product.canonical_url}`;
      const image = product.image.url;
      const rating = product.rating_summary;

      return {
        name: name,
        price: amount,
        currency: currency,
        category: category,
        href: href,
        image: image,
        rating: rating,
      } as CarouselProduct;
    });

  // New Items
  const { products: newItems } = await sdk.getNewProducts();

  const newProducts = newItems.items.slice(0, 8).map((product) => {
    const name = product.name;
    const amount = product.price.regularPrice.amount.value;
    const currency = product.price.regularPrice.amount.currency;
    const category = product.categories.slice(-1)[0].name;
    const href = `/${product.canonical_url}`;
    const image = product.image.url;
    const rating = product.rating_summary;

    return {
      name: name,
      price: amount,
      currency: currency,
      category: category,
      href: href,
      image: image,
      rating: rating,
    } as CarouselProduct;
  });

  // Bottom Slider
  const { cmsBlocks: bottomSliderBlock } = await sdk.getCMSBlocks({
    identifier: "home-slider-bottom",
  });

  let bottomSlider: bannerSlideInformationData[] = [];

  if (bottomSliderBlock && bottomSliderBlock.items && bottomSliderBlock.items.length > 0) {
    const content = bottomSliderBlock.items[0].content;
    const decodedHTML = he.decode(content);
    let bottomSliderRawData = tableToJson(decodedHTML, true) as SliderRawData[];

    bottomSlider = bottomSliderRawData.map((headerSlide) => {
      return {
        href: headerSlide["Enlace botón"],
        img: headerSlide["Imagen fondo"],
        mobileImg: headerSlide["Imagen fondo (móvil)"],
        title: headerSlide["Título"],
        buttonText: headerSlide["Texto botón"],
        description: headerSlide["Descripción"],
      } as bannerSlideInformationData;
    });
  } else {
    console.warn("No bottom slider data found");
  }

  // Liquidation
  const { products: liquidationProducts } = await sdk.getLiquidations();

  const liquidations = liquidationProducts.items.slice(0, 8).map((product) => {
    const name = product.name;
    const amount = product.price.regularPrice.amount.value;
    const currency = product.price.regularPrice.amount.currency;
    const category = product.categories.slice(-1)[0].name;
    const href = `/${product.canonical_url}`;
    const image = product.image.url;
    const rating = product.rating_summary;

    return {
      name: name,
      price: amount,
      currency: currency,
      category: category,
      href: href,
      image: image,
      rating: rating,
    } as CarouselProduct;
  });

  // Opportunities
  const { products: opportunitiesProducts } = await sdk.getOpportunities();

  const opportunities = opportunitiesProducts.items
    .slice(0, 8)
    .map((product) => {
      const name = product.name;
      const amount = product.price.regularPrice.amount.value;
      const currency = product.price.regularPrice.amount.currency;
      const category = product.categories.slice(-1)[0].name;
      const href = `/${product.canonical_url}`;
      const image = product.image.url;
      const rating = product.rating_summary;

      return {
        name: name,
        price: amount,
        currency: currency,
        category: category,
        href: href,
        image: image,
        rating: rating,
      } as CarouselProduct;
    });

  return {
    categories: categoryReferences,
    topSliderData: topSliders,
    bottomSlider: bottomSlider,
    recommendedProducts: recommendations,
    newProducts: newProducts,
    liquidationsProducts: liquidations,
    opportunityProducts: opportunities,
    brandData: brandsData,
  };
}

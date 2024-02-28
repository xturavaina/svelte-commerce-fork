import tableToJson from "$lib/helpers/table-to-json";
import { sdk } from "$lib/server/magento";
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
  const { categories } = await sdk.getCategories();

  const categoryReferences = categories.items[0].children.map((category) => {
    return {
      href: `/${category.url_path}`,
      img: `https://www.unionmusical.es/media/images/cache/catalog/category/120x120/${category.thumbnail}`,
      title: category.name,
    } as CategoryReference;
  });

  // Top Slider
  const { cmsBlocks: homeSliderBlock } = await sdk.getCMSBlocks({
    identifier: "home-slider-top",
  });

  let content = homeSliderBlock.items[0].content;
  let decodedHTML = he.decode(content);
  let homeSliderRawData = tableToJson(decodedHTML, true) as SliderRawData[];

  const topSliders = homeSliderRawData.map((headerSlide) => {
    return {
      href: headerSlide["Enlace botón"],
      img: headerSlide["Imagen fondo"],
      mobileImg: headerSlide["Imagen fondo (móvil)"],
      title: headerSlide["Título"],
      buttonText: headerSlide["Texto botón"],
      description: headerSlide["Descripción"],
    } as bannerSlideInformationData;
  });

  // Brands
  const { cmsBlocks: brandListBlock } = await sdk.getCMSBlocks({
    identifier: "featured-brands",
  });

  content = brandListBlock.items[0].content;
  decodedHTML = he.decode(content);
  let brandsRawData = tableToJson(decodedHTML, true) as BrandRawData[];

  const brandsData = brandsRawData.map((brand) => {
    return {
      name: brand.Nombre,
      logo: brand.Logo,
      url: brand.URL,
    } as BrandData;
  });

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

  content = bottomSliderBlock.items[0].content;
  decodedHTML = he.decode(content);
  let bottomSliderRawData = tableToJson(decodedHTML, true) as SliderRawData[];

  const bottomSlider = bottomSliderRawData.map((headerSlide) => {
    return {
      href: headerSlide["Enlace botón"],
      img: headerSlide["Imagen fondo"],
      mobileImg: headerSlide["Imagen fondo (móvil)"],
      title: headerSlide["Título"],
      buttonText: headerSlide["Texto botón"],
      description: headerSlide["Descripción"],
    } as bannerSlideInformationData;
  });

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


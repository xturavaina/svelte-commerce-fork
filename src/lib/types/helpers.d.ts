// src/lib/types/helpers.d.ts

export type ReferenceLink = {
    text: string;
    href?: string;
    action?: () => void;
  };
  
  export type ColumnDetails = {
    name: string;
    columnItems: ReferenceLink[];
  };
  
  export type bannerSlideInformationData = {
    title: string;
    img: string;
    mobileImg: string;
    href: string;
    description: string;
    buttonText: string;
  };
  
  export type CarouselProduct = {
    name: string;
    category: string;
    price: number;
    currency: string;
    rating: number;
    image: string;
    href: string;
  };
  
  export type CategoryReference = {
    id: number;
    href: string;
    title: string;
    img: string;
  };
  
  const SliderFields = [
    "Título",
    "Descripción",
    "Texto botón",
    "Enlace botón",
    "Imagen fondo",
    "Imagen fondo (móvil)",
  ] as const;
  
  export type SliderFields = (typeof SliderFields)[number];
  
  export type SliderRawData = Record<SliderFields, string>;
  
  const BrandFields = ["Nombre", "Logo", "URL"] as const;
  
  export type BrandFields = (typeof BrandFields)[number];
  
  export type BrandRawData = Record<BrandFields, string>;
  
  export type BrandData = Record<"name" | "logo" | "url", string>;
  
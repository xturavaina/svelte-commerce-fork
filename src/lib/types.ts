export type CategoryProductItem = {
    id: number;
    // uid: string;
    name: string;
    sku: string;
    url_key: string;
    price_range: {
      minimum_price: {
        regular_price: {
          value: number;
          currency: string;
        };
      };
    };
    image: {
      url: string;
    };
  };
  
  export type GetCategoryProductsInterface = {
    category: {
      products: {
        items: CategoryProductItem[];
      };
    };
  };
  
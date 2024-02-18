<script lang="ts">
	import type { StoreConfig } from '$lib/generated/graphql';
  import type { ProductInterface } from '$lib/generated/graphql';

  export let product: ProductInterface;
  export let storeconfig: StoreConfig;
</script>

<svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": storeconfig.base_url,
  "name": storeconfig.website_name,
  "logo": storeconfig.header_logo_src,
  "description": storeconfig.default_description,
  "contactPoint": [
    {"@type": "ContactPoint", "telephone": "+34 935 659 000", "contactType": "sales"},
    {"@type": "ContactPoint", "telephone": "+34 935 659 000", "contactType": "technical support"},
    {"@type": "ContactPoint", "telephone": "+34 935 659 000", "contactType": "customer service"}
  ],
  "address": {"addressCountry": "España"},
  "sameAs": ["Facebook URL", "Twitter URL", "And so on"]
})}</script>`}

{@html `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": storeconfig.base_url,
  "name": storeconfig.website_name,
  "potentialAction": {
    "@type": "SearchAction",
    "target": storeconfig.base_url + "/catalogsearch/result/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})}</script>`}

{@html `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
        "@type": "ListItem",
        "position": "1",
        "name": "Books",
        "item": "https://example.com/books"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Science Fiction",
        "item": "https://example.com/books/sciencefiction"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "Award Winners"
      }]
    }
)}</script>`}

{@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "sku": product.sku,
    "gtin14": product.sku,
    "image": [
      product.image?.url,
      "https://example.com/photos/4x3/trinket.jpg",
      "https://example.com/photos/1x1/trinket.jpg"
    ],
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.manufacturer,
  
    },
    "manufacturer": {
      "@type": "Organitzation",
      "name": product.manufacturer,
  
    },
    "offers": {
      "@type": "Offer",
      "url": storeconfig.base_url + "/" + product.url_key,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "price": product.price_range.minimum_price.regular_price,
      "priceCurrency": storeconfig.base_currency_code,
      "priceValidUntil": product.special_to_date,
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 3.49,
          "currency": storeconfig.base_currency_code,
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      }
    },
    "review": {
      "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.4,
        "reviewCount": 89
      }
    }
    )}</script>`}

</svelte:head>

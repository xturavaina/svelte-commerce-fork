<script lang="ts">
  import BrandList from "$lib/components/BrandList.svelte";
  import TopBannerCarousel from "$lib/components/TopBannerCarousel.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import TopSuggestions from "$lib/components/TopSuggestions.svelte";
  import BottomFullCarousel from "$lib/components/BottomFullCarousel.svelte";
  import BottomSuggestions from "$lib/components/BottomSuggestions.svelte";
  import PlanetUmeBanner from "$lib/components/PlanetUMEBanner.svelte";
  import ContentMap from "$lib/components/ContentMap.svelte";

  export let data;

  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";

  // register Swiper component
  onMount(() => {
    register();
  });
</script>

<div class="bg-white">
  <div class="mx-auto min-h-40 max-w-screen-2xl">
    <div>
      <TopBannerCarousel slides={data.topSliderData} />
      <Categories categories={data.categories} />
      <TopSuggestions
        newItems={data.newProducts}
        recommendations={data.recommendedProducts}
      />
      <BrandList brandsData={data.brandData} />
      <BottomFullCarousel slides={data.bottomSlider} />
      <BottomSuggestions
        liquidation={data.liquidationsProducts}
        opportunities={data.opportunityProducts}
      />
      <div class="py-12">
        <PlanetUmeBanner />
      </div>
      <ContentMap />
    </div>
  </div>
</div>


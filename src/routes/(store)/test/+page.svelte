<!-- src/routes/(store)/(home)/+page.svelte -->

<script lang="ts">
    import TopBannerCarousel from "$lib/components/TopBannerCarousel.svelte";
    export let data: { topSliderData: Array<{ href: string, img: string, mobileImg: string, title: string, buttonText: string, description: string }> };
  </script>
  
  <div class="bg-white">
    <div class="mx-auto min-h-40 max-w-screen-2xl">
      <div>
        {#if data.topSliderData.length > 0}
          <TopBannerCarousel slides={data.topSliderData} />
        {:else}
          <p>No slides available for the top banner.</p>
        {/if}
      </div>
    </div>
  </div>
  
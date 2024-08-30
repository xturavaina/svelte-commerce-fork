<script lang="ts">
  import type { BrandData } from "$lib/types/helpers";
  import { Button } from "flowbite-svelte";

  export let brandsData: BrandData[];
</script>

<div class="py-12">
  <div class="flex flex-col items-center bg-violet-600 py-24">
    <div class="text-white text-center text-4xl font-[RobotoLight]">
      Las marcas de instrumentos musicales más populares
    </div>
    <div
      class="pt-12 md:pt-20 grid grid-cols-2 md:grid-cols-5 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-20"
    >
      {#each brandsData as brand}
        <a href={brand.url}>
          <img src={brand.logo} alt={brand.name} class="brightness-0 invert" />
        </a>
      {/each}
    </div>
    <div class="pt-12 md:pt-24">
      <a class="px-8 py-4 text-white border rounded-md transition-colors hover:bg-white hover:text-black" href="/brands">Ver todas las marcas</a>
    </div>
  </div>
</div>

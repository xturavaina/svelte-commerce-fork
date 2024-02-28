<script lang="ts">
  import { TabItem, Tabs } from "flowbite-svelte";
  import ProductCarousel from "./ProductCarousel.svelte";
  import type { CarouselProduct } from "$lib/types/helpers";

  export let recommendations: CarouselProduct[];
  export let newItems: CarouselProduct[];
</script>

<div>
  <div class="text-center text-4xl font-[RobotoLight] py-12">
    Instrumentos musicales destacados
  </div>
  <Tabs style="underline" defaultClass="flex justify-center">
    <TabItem open title="Recomendaciones" defaultClass="text-lg">
      <div>
        <ProductCarousel slides={recommendations} />
      </div>
    </TabItem>
    <TabItem title="Novedades" defaultClass="text-lg">
      <div>
        <ProductCarousel slides={newItems} />
      </div>
    </TabItem>
  </Tabs>
</div>

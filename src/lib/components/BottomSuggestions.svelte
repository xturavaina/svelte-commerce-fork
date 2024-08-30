<script lang="ts">
  import { TabItem, Tabs } from "flowbite-svelte";
  import ProductCarousel from "./ProductCarousel.svelte";
  import type { CarouselProduct } from "$lib/types/helpers";

  export let liquidation: CarouselProduct[];
  export let opportunities: CarouselProduct[];
</script>

<div>
  <div class="text-center text-4xl font-[RobotoLight] py-12">
    Instrumentos musicales en oferta
  </div>
  <Tabs style="underline" defaultClass="flex justify-center">
    <TabItem open title="Liquidación" defaultClass="text-lg">
      <div>
        <ProductCarousel slides={liquidation} />
      </div>
    </TabItem>
    <TabItem title="Oportunidades" defaultClass="text-lg">
      <div>
        <ProductCarousel slides={opportunities} />
      </div>
    </TabItem>
  </Tabs>
</div>

<script lang="ts">
  import type { CarouselProduct } from "$lib/types/helpers";
  import { Rating } from "flowbite-svelte";
  import { register } from "swiper/element/bundle";

  $: register();

  export let slides: CarouselProduct[];
</script>

<div class="content-center mx-auto py-6">
  <swiper-container
    navigation="true"
    slides-per-view="auto"
    space-between={20}
    loop={false}
    autoplay={true}
    allow-touch-move={false}
  >
    {#each slides as slide}
      <swiper-slide>
        <!-- For Desktop -->
        <div class="flex flex-col items-center px-2 py-2 bg-white">
          <a href={slide.href} class="aspect-square w-full flex">
            <img src={slide.image} alt={slide.name} />
          </a>
          <Rating
            id="product-rating-{slide.name}"
            total={5}
            size={20}
            rating={slide.rating}
          />
          <a href={slide.href} class="text-sm text-ellipsis line-clamp-1"
            >{slide.name}</a
          >
          <span class="text-xs">{slide.category}</span>
          <span class="text-sm py-2"
            >{slide.price.toFixed(2)} {slide.currency}</span
          >
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="postcss">
  swiper-slide {
    width: 70%;
    border-radius: 1rem;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 20%;
    }

    img {
      display: block;
      width: 100%;
      object-fit: contain;
    }
  }
</style>

<script lang="ts">
  import type { bannerSlideInformationData } from "$lib/types/helpers";
  import { Button } from "flowbite-svelte";
  // import { register } from "swiper/element/bundle";

  // $: register();

  export let slides: bannerSlideInformationData[];
</script>

<div class="content-center mx-auto py-6">
  <swiper-container
    slides-per-view="auto"
    navigation={true}
    centered-slides={true}
    space-between="20"
    autoplay={true}
    loop={true}
    allow-touch-move={false}
  >
    {#each slides as slide}
      <swiper-slide>
        <!-- For Desktop -->
        <a href={slide.href} class="hidden md:inline-block">
          <img src={slide.img} alt={slide.title} />
          <Button color="light" class="absolute left-12 bottom-8 min-w-56"
            >{slide.buttonText}</Button
          >
        </a>

        <!-- For Mobile -->
        <a href={slide.href} class="inline-block md:hidden aspect-square">
          <img src={slide.mobileImg} alt={slide.title} />
        </a>
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
      width: 50%;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>

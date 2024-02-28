<script lang="ts">
  import type { bannerSlideInformationData } from "$lib/types/helpers";
  import { Button } from "flowbite-svelte";
  
  // import { register } from "swiper/element/bundle";

  // $: register();

  export let slides: bannerSlideInformationData[];
</script>

<div class="content-center mx-auto py-6">
  <swiper-container
    navigation={true}
    slides-per-view="1"
    centered-slides={true}
    autoplay={true}
    space-between="20"
    loop={true}
    allow-touch-move={false}
  >
    {#each slides as slide}
      <swiper-slide>
        <!-- For Desktop -->
        <a href={slide.href} class="flex flex-row px-8 justify-center gap-x-16">
          <div
            class="flex flex-col items-center justify-around py-8 md:py-12 md:w-4/12 gap-16"
          >
            <div class="flex flex-col gap-4 md:gap-2">
              <div class="text-2xl md:text-4xl text-center md:text-justify">
                {slide.title}
              </div>
              <div class="text-md md:text-xl text-wrap text-justify">
                {slide.description}
              </div>
            </div>
            <Button color="light" class="min-w-56">{slide.buttonText}</Button>
          </div>
          <div class="w-6/12 max-h-[30rem] md:flex hidden">
            <img src={slide.img} alt={slide.title} />
          </div>
        </a>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="postcss">
  swiper-slide {
    overflow: hidden;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 45px;
    }
  }
</style>

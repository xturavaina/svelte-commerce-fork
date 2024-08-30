<script lang="ts">
  import banner from "$lib/assets/planet_ume_banner.jpg";
</script>

<div class="bg-blue-500 h-[400px] relative overflow-hidden flex flex-col justify-center px-6 md:px-20 gap-20">
  <img class="absolute object-cover md:object-contain md:right-0 h-full w-full md:w-auto" src={banner} alt="planetUME Banner" />
  <div class="flex flex-col justify-center items-start z-10">
    <span class="text-4xl text-center"
      >Disfruta de un 2% en todas tus compras para siempre,</span
    >
    <span class="text-4xl text-white text-center"
      >solo por pertenecer al Planeta UME.</span
    >
  </div>
  <a href="/planetaume" class="w-full md:w-1/2 bg-white rounded p-2 flex justify-center z-10">Hazte miembro ahora</a>
</div>

<style lang="postcss">
</style>

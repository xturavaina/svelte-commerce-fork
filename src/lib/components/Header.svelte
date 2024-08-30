<script lang="ts">
  import logo from "$lib/assets/logo.webp";
  import AppBarCta from "./AppBar/AppBarCTA.svelte";
</script>

<header class="header">
  <div class="anchor-container">
    <button class="anchor-text text-primaryDark"> Contacto </button>
    <a href="/" class="anchor-text text-[#6e00ff]"> Nuestras tiendas </a>
  </div>
  <a href="/">
    <img src={logo} alt="logo" class="h-9" />
  </a>
  <div class="anchor-container">
    <a
      href="https://blog.unionmusical.es/"
      class="anchor-text text-primaryDark"
    >
      Blog
    </a>
    <a href="/nuestras-tiendas" class="anchor-text text-blue-400">
      Planeta UME
    </a>
  </div>
  <div class="flex md:hidden">
    <AppBarCta />
  </div>
</header>

<style lang="postcss">
  .header {
    @apply bg-[#fafafa] border-b border-[#e7e7e7] flex flex-row items-center justify-between md:justify-around py-2 px-4;
  }

  .anchor-text {
    @apply hover:underline text-xs;
  }

  .anchor-container {
    @apply flex-row gap-4 hidden md:flex;
  }
</style>

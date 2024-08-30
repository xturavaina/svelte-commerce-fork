<script lang="ts">
  import type { ReferenceLink } from "$lib/types/helpers";
  import { Search } from "flowbite-svelte";
  import AppBarCta from "./AppBar/AppBarCTA.svelte";

  const leftLinks: ReferenceLink[] = [
    {
      text: "Novedades",
      href: "/novedades",
    },
    {
      text: "Hot Deals",
      href: "/hot-deals",
    },
  ];

  let searchActive = false;

  const onSearchFocus = () => {
    searchActive = true;
  };

  const onSearchBlur = () => {
    searchActive = false;
  };
</script>

<div
  class="flex flex-row md:justify-around items-center py-3 pr-2 md:px-2 bg-white border-b"
>
  <div class="{searchActive ? 'hidden' : 'flex'} flex-row items-center">
    <button class="flex items-center justify-center p-2 md:mr-2"
      ><span class="material-symbols-outlined"> menu </span>
    </button>
    <div class="hidden md:flex flex-row gap-4">
      {#each leftLinks as link}
        <a class="text-sm hover:underline" href={link.href ?? "/404"}>
          {link.text}
        </a>
      {/each}
    </div>
  </div>
  <div class="flex-grow md:flex-grow-0">
    <form class="flex">
      <Search
        size="md"
        placeholder="Buscar"
        class="search-bar md:min-w-[35vw] {searchActive
          ? 'lg:min-w-[35vw]'
          : 'lg:min-w-[25vw]'} border-0 bg-gray-200 rounded-full transition "
        on:focus={onSearchFocus}
        on:blur={onSearchBlur}
      />
    </form>
  </div>
  <div class="{searchActive ? 'hidden' : 'flex'} hidden md:block">
    <AppBarCta />
  </div>
</div>

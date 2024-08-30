<script lang="ts">
  import type { ReferenceLink } from "$lib/types/helpers";

  export let navItems: ReferenceLink[];
</script>

<nav class="bg-primaryDark hidden md:flex justify-center">
  {#each navItems as item}
    <a
      class="flex justify-center items-center text-white px-4 py-4 text-sm font- hover:underline font-[RobotoLight]"
      href={item.href}
    >
      {item.text}
    </a>
  {/each}
</nav>

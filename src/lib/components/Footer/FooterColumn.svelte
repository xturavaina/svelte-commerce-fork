<script lang="ts">
  import type { ReferenceLink } from "$lib/types/helpers";
  import { AccordionItem, Accordion } from "flowbite-svelte";

  export let columnName: string;
  export let columnItems: ReferenceLink[];
</script>

<!-- Mobile View -->
<Accordion class="md:hidden py-2">
  <AccordionItem
    borderClass="border-0"
    defaultClass="rounded-none items-stretch flex flex-row items-center justify-between w-full"
    paddingDefault="p-0 p-4"
  >
    <span slot="header">{columnName}</span>

    <ul>
      {#each columnItems as item}
        <li>
          {#if item.href !== undefined}
            <a href={item.href} class="col-item hover:underline">
              {item.text}
            </a>
          {:else if item.action !== undefined}
            <button type="button" class="col-item" on:click={item.action}>
              {item.text}
            </button>
          {:else}
            {item.text}
          {/if}
        </li>
      {/each}
    </ul>
  </AccordionItem>
</Accordion>

<!-- Desktop View -->
<ul class="hidden md:block">
  <li class="col-title">
    {columnName}
  </li>
  {#each columnItems as item}
    <li>
      {#if item.href !== undefined}
        <a href={item.href} class="col-item hover:underline">
          {item.text}
        </a>
      {:else if item.action !== undefined}
        <button type="button" class="col-item" on:click={item.action}>
          {item.text}
        </button>
      {:else}
        {item.text}
      {/if}
    </li>
  {/each}
</ul>

<style lang="postcss">
  .col-title {
    @apply text-sm text-gray-500 mb-6;
  }

  .col-item {
    @apply text-sm;
  }
</style>

<script lang="ts">
  import type { CategoryReference } from "$lib/types/helpers";
  import CategoryItem from "./Categories/CategoryItem.svelte";

  export let categories: CategoryReference[] = [];
</script>

<div class="grid md:grid-cols-3 grid-cols-1 p-8 divide-y md:divide-y-0 ">
  {#each categories as category}
    <CategoryItem {category} />
  {/each}
</div>

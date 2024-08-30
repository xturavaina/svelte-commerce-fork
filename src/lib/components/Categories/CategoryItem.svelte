<script lang="ts">
    import type { CategoryReference } from "$lib/types/helpers";
  
    export let category: CategoryReference;
  </script>
  
  <a class="flex flex-row items-center gap-6 px-3 py-6" href={`/categories/${category.href}`}>
    <img src={category.img} alt={`${category.title}-img`} /><span
      >{category.title}</span
    ></a
  >
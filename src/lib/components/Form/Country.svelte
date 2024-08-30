<script lang="ts">
  import Select from '$lib/components/Form/Select.svelte'
  import type { Country } from '$lib/types/mainApptypes'

  export let countries: Partial<Country>[]
</script>

<Select label="Country" {...$$restProps}>
  <option value=""></option>
  {#each countries as country}
    <option value={country.id}>{country.full_name_locale}</option>
  {/each}
</Select>

<script>
  import { page } from '$app/stores'
  import MiniCart from '$lib/components/MiniCart.svelte'
  import Input from '$lib/components/Form/Input.svelte'
  import { Search, CircleUser } from 'svelte-lucide'
  import DarkMode from '$lib/components/DarkMode.svelte'
</script>

<header
  class="page-header mb-6 border-b border-neutral-300 dark:border-neutral-700"
>
  <section class="header content">
    <a href="/" class="logo">
      <img
        src={$page.data.logo.url ?? '/magento-logo.svg'}
        width={$page.data.logo.width ?? 179}
        height={$page.data.logo.height ?? 50}
        alt=""
      />
    </a>

    <div class="block-search block">
      <form action="/search" method="get" class="form minisearch">
        <Input
          label="Search"
          noLabel={true}
          name="q"
          placeholder="Search..."
          value={$page.url.searchParams.get('q')}
        />
        <button type="submit" class="action search" title="Search">
          <Search tabindex="-1" />
        </button>
      </form>
    </div>

    <DarkMode />

    {#if $page.data.customer}
      <a
        class="customer rounded p-2"
        href="/customer/account"
        title="My Account"
      >
        <CircleUser tabindex="-1" aria-hidden="true" />
      </a>
    {:else}
      <a
        class="customer rounded p-2"
        href="/customer/account/login"
        title="Login"
      >
        <CircleUser tabindex="-1" aria-hidden="true" />
      </a>
    {/if}

    <MiniCart cart={$page.data.cart} />
  </section>
</header>

<style lang="postcss">
  .header.content {
    @apply container mx-auto px-4;
  }

  .header.content {
    @apply flex items-center gap-4 py-4;
  }

  .block-search {
    @apply mx-auto;
  }

  .minisearch {
    @apply flex items-center;
  }

  .minisearch .action.search {
    @apply ml-1 p-2;
  }
</style>

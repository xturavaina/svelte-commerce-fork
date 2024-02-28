<script>
  import "../app.pcss";
  export let data;
</script>

<svelte:head>
  <title>{data.head.title}</title>
  {#if data.head.description}
    <meta name="description" content={data.head.description} />
  {/if}
  {#if data.head.keywords}
    <meta name="keywords" content={data.head.keywords} />
  {/if}

  <!-- Fonts -->
  <link rel="stylesheet" href="/fonts.css" />
  <!-- Google Material Design Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>
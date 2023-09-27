<script>
  // The data object is available from the +page.js file
  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.title} />
</svelte:head>

<article>
  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-4);
    margin-inline: auto;
  }
</style>

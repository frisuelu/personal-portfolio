<script>
  // The data object is available from the +page.js file
  export let data;
</script>

<link
  href="https://github.com/PrismJS/prism-themes/themes/prism-dracula.css"
  rel="stylesheet"
/>

<!-- SEO -->
<svelte:head>
  <title>{data.title}</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Medium: ${data.title}" />
  <meta
    name="keywords"
    content="Data Science, AI, Machine Learning, Technology"
  />
  <meta name="author" content="Manuel Souto Juan" />
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

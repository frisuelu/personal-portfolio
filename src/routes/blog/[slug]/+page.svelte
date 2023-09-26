<script>
  // The data object is available from the +page.js file
  export let data;
</script>

<article>
  <svelte:component this={data.content} />
</article>

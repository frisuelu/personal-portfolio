<script>
  import BlogGrid from "$lib/components/BlogGrid.svelte";

  // Retrieve the dynamic available posts
  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>Blog Posts - Manuel Souto Juan</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Medium blog posts by Manuel Souto Juan" />
  <meta
    name="keywords"
    content="Data Science, AI, Machine Learning, Technology"
  />
  <meta name="author" content="Manuel Souto Juan" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Blog Posts - Manuel Souto Juan" />
</svelte:head>

<div align="center" class="landing_title">
  <h2>Medium Blog Posts</h2>
  <h1>Sharing is caring!</h1>
  <p>
    <br />During my career I have learned and experienced many things, so I have
    taken the time to condense some of the most relevant knowledge I have
    gained. These are all Medium embeddings of the actual posts for content
    duplicity reasons, but in the future I want to keep updating this section
    with new organic content.
  </p>
</div>

{#if data.error}
  <div class="error-message">
    <p>⚠️ Unable to load blog posts at the moment. Please try again later.</p>
    <p><small>Error: {data.error}</small></p>
  </div>
{:else if data.posts && data.posts.length > 0}
  <div align="center">
    <BlogGrid posts={data.posts} />
  </div>
{:else}
  <div class="loading-message">
    <p>Loading blog posts...</p>
  </div>
{/if}

<style>
  .landing_title {
    padding-bottom: var(--size-fluid-5);
  }

  .error-message {
    text-align: center;
    padding: var(--size-fluid-4);
    background-color: var(--surface-2);
    border-radius: var(--radius-3);
    margin: var(--size-fluid-3) 0;
  }

  .loading-message {
    text-align: center;
    padding: var(--size-fluid-4);
    color: var(--text-2);
  }
</style>

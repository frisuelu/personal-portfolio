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

<div align="center">
  <BlogGrid posts={data.posts} />
</div>

<style>
  .landing_title {
    padding-bottom: var(--size-fluid-5);
  }
</style>

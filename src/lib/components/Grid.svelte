<script>
  // Individual card for carousel class
  import BlogCard from "./BlogCard.svelte";

  // The blog post information is passed here
  export let posts;
</script>

<link
  rel="stylesheet"
  href="https://cdn.tailgrids.com/tailgrids-fallback.css"
/>

<!-- ====== Blog Section Start -->

<div class="flex flex-wrap -mx-4">
  <!-- New item -->
  {#each posts as post}
    <BlogCard
      title={post.meta.title}
      subtitle={post.meta.subtitle}
      date={post.meta.date}
      thumbnail_url={post.meta.thumbnail_url}
      thumbnail_alt={post.meta.thumbnail_alt}
      article_url={post.path}
    />
  {/each}
</div>
<!-- ====== Blog Section End -->

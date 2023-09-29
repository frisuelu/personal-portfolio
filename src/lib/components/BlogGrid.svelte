<script>
  // Individual card for carousel class
  import BlogCard from "./BlogCard.svelte";
  // Responsive grid component
  import Grid from "svelte-grid-responsive";

  // The blog post information is passed here
  export let posts;
</script>

<Grid container gutter={10} columns={2}>
  <!-- New item -->
  {#each posts as post}
    <Grid>
      <BlogCard
        title={post.meta.title}
        subtitle={post.meta.subtitle}
        date={post.meta.date}
        thumbnail_url={post.meta.thumbnail_url}
        thumbnail_alt={post.meta.thumbnail_alt}
        article_url={post.path}
        media={post.meta.media}
      />
    </Grid>
  {/each}
</Grid>

<script>
  import Grid from "$lib/components/Grid.svelte";

  // Retrieve the dynamic available posts
  export let data;
</script>

<h2>Medium Blog Posts</h2>
<h1>Sharing is caring!</h1>
<p>
  <br />During my career I have learned and experienced many things, so I have taken
  the time to condense some of the most relevant knowledge I have gained. These
  are all Medium embeddings of the actual posts for content duplicity reasons,
  but in the future I want to keep updating this section with new organic
  content.
</p>

<Grid posts={data.posts} />

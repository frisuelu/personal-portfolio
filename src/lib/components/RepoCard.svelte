<script>
  export let repo_name;
  export let repo_url;
  export let repo_description;
</script>

<div>
  <img class="thumbnail" src="src/lib/images/repos/{repo_name}.jpg" alt="Thumbnail" />
  <div class="description">
    <h2>{repo_name}</h2>
    <p>{repo_description}</p>
    <a href={repo_url}>View on GitHub</a>
  </div>
</div>

<style>
  .thumbnail {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size-fluid-2);
    margin-bottom: var(--size-fluid-2);
    block-size: var(--size-fluid-10);
  }

  .description {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-inline: var(--size-fluid-2);
  }
</style>

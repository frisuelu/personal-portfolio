<script>
  import { Github } from "lucide-svelte";

  export let repo_name;
  export let repo_url;
  export let repo_description;
</script>

<div>
  <div>
    <img
      class="thumbnail"
      src="src/lib/images/repos/{repo_name}.jpg"
      alt="Thumbnail"
    />
  </div>
  <div class="link_button">
    <div class="repo">
      <div>View on GitHub</div>
      <div><a href={repo_url}><Github /></a></div>
    </div>
  </div>
  <div align="center">
    <h2>{repo_name}</h2>
  </div>
  <div align="center">
    <p><br />{repo_description}</p>
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

  .link_button {
    display: flex;
    justify-content: flex-end;

    
  }

  .repo {
    display: flex;
    column-gap: var(--size-fluid-2);
    align-items: center;
    border: var(--border-size-2) solid var(--button);
    border-radius: var(--radius-3);
    padding-left: var(--size-fluid-1);
    padding-right: var(--size-fluid-1);
  }

  .repo:hover {
    background-color: var(--surface-4)
  }
</style>

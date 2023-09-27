<script>
  import RepoCard from "./RepoCard.svelte";

  // Load repositories data
  export let repositories;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#each repositories as repo}
    <RepoCard
      repo_name={repo.name}
      repo_url={repo.html_url}
      repo_description={repo.description}
    />
  {/each}
</div>

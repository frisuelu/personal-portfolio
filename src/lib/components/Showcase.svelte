<script>
  import RepoCard from "./RepoCard.svelte";
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";

  // Load repositories data
  export let repositories;
</script>

<div class="box">
  {#if browser}
    <Carousel class="box">
      {#each repositories as repo}
        <RepoCard
          repo_name={repo.name}
          repo_url={repo.html_url}
          repo_description={repo.description}
        />
      {/each}
    </Carousel>
  {/if}
</div>

<style>
  .box {
    padding: var(--size-fluid-5);
  }
</style>

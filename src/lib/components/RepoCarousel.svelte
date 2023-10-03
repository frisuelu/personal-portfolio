<script>
  import RepoCard from "./RepoCard.svelte";
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";

  // Load repositories data
  export let repositories;
</script>

<div class="box">
  {#if browser}
    <Carousel
      autoplay
      duration={1500}
    >
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
    margin-left: auto;
    margin-right: auto;
    padding: var(--size-fluid-2);
    width: 60%;
  }

  @media (max-width: 768px) {
    .box {
      padding: var(--size-1);
      width: 85%;
    }
  }
</style>

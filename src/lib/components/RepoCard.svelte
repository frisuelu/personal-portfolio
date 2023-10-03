<script>
  import { Github } from "lucide-svelte";

  export let repo_name;
  export let repo_url;
  export let repo_description;
</script>

<div>
  <div>
    <img class="thumbnail" src="images/repos/{repo_name}.jpg" alt="Thumbnail" />
  </div>
  <div align="center" class="prose">
    <div class="repo_header">
      <div class="repo_title"><h3>{repo_name}</h3></div>
      <div class="github_link"><a href={repo_url}><Github /></a></div>
    </div>
    <p>{repo_description}</p>
  </div>
</div>

<style>
  .thumbnail {
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size-2);
    margin-bottom: var(--size-2);
    block-size: var(--size-fluid-8);
  }

  .repo_header {
    display: block;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .thumbnail {
      height: 70%;
      width: 70%;
    }

    .prose h3 {
      font-size: var(--size-5);
    }

    .prose p {
      font-size: var(--size-3);
    }
  }
</style>

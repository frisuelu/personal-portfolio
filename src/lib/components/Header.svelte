<script>
  import { base } from "$app/paths";
  import Toggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav>
  <!-- Title -->
  <a href="{base}/" class="title">
    <b>Personal Portfolio</b>
  </a>
  <!-- Navigation -->
  <ul class="links">
    <li>
      <a href="{base}/skillset">Skillset</a>
    </li>
    <li>
      <a href="{base}/projects">Projects</a>
    </li>
    <li>
      <a href="{base}/blog">Blog</a>
    </li>
    <li>
      <a href="{base}/conferences">Conferences</a>
    </li>
    <li>
      <a href="{base}/about">About</a>
    </li>
  </ul>
  <!-- Theme toggle -->
  <Toggle />
</nav>

<style>
  nav {
    padding-block: var(--size-7);
  }

  .links {
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Add hover display to links */
  a:hover {
    background-color: var(--stone-5);
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-3);
    color: var(--stone-9);
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>

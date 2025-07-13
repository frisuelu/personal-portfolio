<script>
  import { base } from "$app/paths";
  import Toggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav aria-label="Main navigation">
  <!-- Title -->
  <a href="{base}/" class="title" aria-label="Go to homepage">
    <b>Personal Portfolio</b>
  </a>
  <!-- Navigation -->
  <ul class="links" role="menubar">
    <li role="none">
      <a href="{base}/skillset" role="menuitem" aria-label="View skillset and tools">Skillset</a>
    </li>
    <li role="none">
      <a href="{base}/projects" role="menuitem" aria-label="View open source projects">Projects</a>
    </li>
    <li role="none">
      <a href="{base}/blog" role="menuitem" aria-label="Read blog posts">Blog</a>
    </li>
    <li role="none">
      <a href="{base}/conferences" role="menuitem" aria-label="View conferences and talks">Conferences</a>
    </li>
    <li role="none">
      <a href="{base}/about" role="menuitem" aria-label="Learn more about me">About</a>
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
    transition: all 0.2s ease;
  }

  /* Add hover display to links */
  a:hover {
    background-color: var(--stone-5);
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-3);
    color: var(--stone-9);
  }

  /* Focus styles for keyboard navigation */
  a:focus {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
    background-color: var(--stone-5);
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-3);
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>

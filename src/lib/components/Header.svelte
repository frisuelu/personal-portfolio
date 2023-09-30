<script>
  import Toggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav>
  <!-- Title -->
  <a href="/" class="title">
    <b>Personal Portfolio</b>
  </a>
  <!-- Navigation -->
  <ul class="links">
    <li>
      <a href="/skillset">Skillset</a>
    </li>
    <li>
      <a href="/projects">Projects</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/conferences">Conferences</a>
    </li>
    <li>
      <a href="/about">About</a>
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

<script>
  import { base } from "$app/paths";
  import { Github, LinkedinIcon, Mail } from "lucide-svelte";
</script>

<footer>
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
    <div class="icons">
      <a href="https://www.linkedin.com/in/manuel-souto-juan/">
        <LinkedinIcon />
      </a>
      <a href="https://www.github.com/frisuelu">
        <Github />
      </a>
      <a href="mailto:manuelsoju@hotmail.com">
        <Mail />
      </a>
    </div>
  </nav>
</footer>

<style>
  footer {
    padding-block: var(--size-7);
    border-top: 0.5px solid var(--border);
  }

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

  .icons {
    display: flex;
    gap: var(--size-7);
  }

  /* Add hover display to links */
  a:hover {
    background-color: var(--stone-5);
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-3);
    color: var(--stone-9);
  }

  /* Avoid the hovering to affect the icons */
  .icons a:hover {
    background-color: inherit;
    box-shadow: inherit;
    border-radius: inherit;
    color: inherit;
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

<script>
  import { Github, LinkedinIcon, Mail } from "lucide-svelte";
</script>

<footer>
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

  .icons {
    display: flex;
    gap: var(--size-7);
  }
</style>

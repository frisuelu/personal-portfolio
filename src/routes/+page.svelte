<script>
  import { base } from "$app/paths";
  import { Github, LinkedinIcon, Mail } from "lucide-svelte";
</script>

<svelte:head>
  <title>Personal porfolio - Manuel Souto Juan</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Personal portfolio of Manuel Souto Juan" />
  <meta
    name="keywords"
    content="Data Science, AI, Machine Learning, Technology"
  />
  <meta name="author" content="Manuel Souto Juan" />
  <meta property="og:type" content="blog" />
  <meta property="og:title" content="Personal portfolio - Manuel Souto Juan" />
</svelte:head>

<div class="content">
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1>Manuel Souto Juan</h1>
      <h3>Data Scientist</h3>
    </div>
    <div class="image">
      <img src="images/landing/me_2.jpg" alt="Manuel Souto Juan" />
    </div>
  </section>

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

  <div class="prose">
    <p>
      Hi there! My name is Manuel, and I am a Data Scientist based in Gijón
      (Spain). I am currently working as Tech Lead at a small DS consulting firm
      called <a href="https://www.bedrockdbd.com">Bedrock</a>.
    </p>
    <p>
      My main focus is leading the technical development of Data Science and AI
      projects for our clients, while navigating their requirements and reaching
      the perfect solution suited for them.
    </p>
    <p>
      I have worked for different clients in many industries, spanning the <b
        >marketing & media</b
      >,
      <b>sports</b> and <b>industrial</b> sectors, among others.
    </p>
    <p>Check more about me in the following sections! 👇</p>
  </div>

  <div align="left">
    <section id="skillset">
      <div class="section-title">Skillset 🛠️</div>
      <div class="section-description">
        Check out my experience and tools I am proficient at
      </div>
      <a href="{base}/skillset" class="section-button">View Skillset</a>
    </section>

    <section id="projects">
      <div class="section-title">Projects 💻</div>
      <div class="section-description">
        Open-sourced projects developed on my spare time
      </div>
      <a href="{base}/projects" class="section-button">View Projects</a>
    </section>

    <section id="blog">
      <div class="section-title">Blog 📖</div>
      <div class="section-description">
        Medium blog posts on technical stuff
      </div>
      <a href="{base}/blog" class="section-button">Read Blog</a>
    </section>

    <section id="conferences">
      <div class="section-title">Conferences 👨🏻‍🏫</div>
      <div class="section-description">
        Events, talks and conferences I have participated in
      </div>
      <a href="{base}/conferences" class="section-button">View Conferences</a>
    </section>

    <section id="about">
      <div class="section-title">About Me ☝️</div>
      <div class="section-description">
        Learn more about who I am and what I do.
      </div>
      <a href="{base}/about" class="section-button">About Me</a>
    </section>
  </div>
</div>

<style>
  /* Styling for the main content */
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--size-8);
  }

  section {
    margin-top: var(--size-fluid-5);
    margin-bottom: var(--size-fluid-5);
    justify-content: center;
  }

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: var(--size-fluid-5);
    margin-top: var(--size-fluid-5);
    margin-bottom: var(--size-fluid-5);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero-content :is(h1) {
    font-family: fantasy;
    font-style: italic;
  }

  .image {
    margin-left: 50px;
  }

  .image img {
    flex: 1;
    height: auto;
    width: 400px;
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }

    .image {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  .icons {
    display: flex;
    gap: var(--size-7);
  }

  .icons a {
    color: inherit;
    text-decoration: none;
  }

  .section-title {
    font-size: var(--size-6);
    font-weight: bold;
    margin-bottom: var(--size-fluid-2);
  }

  .section-description {
    margin-bottom: var(--size-fluid-2);
  }

  .section-button {
    background-color: var(--surface-1);
    border: var(--border-size-2) solid var(--button);
    border-radius: var(--radius-3);
    border-color: var(--button);
    padding: var(--size-fluid-1) var(--size-fluid-3);
    cursor: pointer;
  }

  .section-button:hover {
    background-color: #555;
  }
</style>

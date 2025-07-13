<script>
  import { base } from "$app/paths";
  import { Github, LinkedinIcon, Mail } from "lucide-svelte";
</script>

<svelte:head>
  <title>Manuel Souto Juan - Data Scientist Portfolio</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Data Scientist specializing in AI, Machine Learning, and Data Science solutions. Based in Gijón, Spain." />
  <meta name="keywords" content="Data Science, AI, Machine Learning, Technology, Manuel Souto Juan, Portfolio" />
  <meta name="author" content="Manuel Souto Juan" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Manuel Souto Juan - Data Scientist Portfolio" />
  <meta property="og:description" content="Data Scientist specializing in AI, Machine Learning, and Data Science solutions." />
  <meta property="og:image" content="https://frisuelu.github.io/personal-portfolio/images/landing/me_2.jpg" />
  <meta property="og:url" content="https://frisuelu.github.io/personal-portfolio/" />
</svelte:head>

<div class="content">
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1>Manuel Souto Juan</h1>
      <h3>Data Scientist</h3>
    </div>
    <div class="image">
      <img 
        src="{base}/images/landing/me_2.jpg" 
        alt="Manuel Souto Juan - Data Scientist" 
        loading="eager"
        width="400"
        height="400"
      />
    </div>
  </section>

  <div class="icons" role="group" aria-label="Social media links">
    <a href="https://www.linkedin.com/in/manuel-souto-juan/" aria-label="LinkedIn profile">
      <LinkedinIcon />
    </a>
    <a href="https://www.github.com/frisuelu" aria-label="GitHub profile">
      <Github />
    </a>
    <a href="mailto:manuelsoju@hotmail.com" aria-label="Send email">
      <Mail />
    </a>
  </div>

  <div class="prose">
    <p>
      Hi there! My name is Manuel, and I am a Data Scientist based in Gijón
      (Spain). I am currently working as Data Scientist at <a
        href="https://decidesoluciones.es/" target="_blank" rel="noopener noreferrer">Decide4AI</a
      >.
    </p>
    <p>
      My main focus is leading the technical development of Data Science and AI
      projects for our clients, while navigating their requirements and reaching
      the perfect solution suited for them. I have worked for different clients
      in many industries, spanning the <b>marketing & media</b>,
      <b>sports</b>, <b>industrial</b> or <b>retail</b> sectors, among others.
    </p>
    <p>
      I have also worked for a startup DS consulting firm based in Gijón called <a
        href="https://bedrockdbd.com/" target="_blank" rel="noopener noreferrer">Bedrock</a
      >.
    </p>
    <p>Check more about me in the following sections! 👇</p>
  </div>

  <div align="left">
    <section id="skillset">
      <div class="section-title">Skillset 🛠️</div>
      <div class="section-description">
        Check out my experience and tools I am proficient at
      </div>
      <a href="{base}/skillset" class="section-button" aria-label="View skillset and tools">View Skillset</a>
    </section>

    <section id="projects">
      <div class="section-title">Projects 💻</div>
      <div class="section-description">
        Open-sourced projects developed on my spare time
      </div>
      <a href="{base}/projects" class="section-button" aria-label="View open source projects">View Projects</a>
    </section>

    <section id="blog">
      <div class="section-title">Blog 📖</div>
      <div class="section-description">
        Medium blog posts on technical stuff
      </div>
      <a href="{base}/blog" class="section-button" aria-label="Read blog posts">Read Blog</a>
    </section>

    <section id="conferences">
      <div class="section-title">Conferences 👨🏻‍🏫</div>
      <div class="section-description">
        Events, talks and conferences I have participated in
      </div>
      <a href="{base}/conferences" class="section-button" aria-label="View conferences and talks">View Conferences</a>
    </section>

    <section id="about">
      <div class="section-title">About Me ☝️</div>
      <div class="section-description">
        Learn more about who I am and what I do.
      </div>
      <a href="{base}/about" class="section-button" aria-label="Learn more about me">About Me</a>
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
    border-radius: var(--radius-3);
    transition: transform 0.3s ease;
  }

  .image img:hover {
    transform: scale(1.05);
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
    transition: all 0.2s ease;
    padding: var(--size-2);
    border-radius: var(--radius-3);
  }

  .icons a:hover {
    background-color: var(--surface-2);
    transform: translateY(-2px);
  }

  .icons a:focus {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
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
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .section-button:hover {
    background-color: var(--surface-2);
    transform: translateY(-1px);
    box-shadow: var(--shadow-2);
  }

  .section-button:focus {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }
</style>

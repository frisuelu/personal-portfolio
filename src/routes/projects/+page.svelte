<script>
  import RepoCarousel from "$lib/components/RepoCarousel.svelte";

  // Receive the repository information on load
  export let data;
</script>

<div align="center" class="landing_title">
  <h1>Some open-source projects I have worked on</h1>
  <p>
    <br />In the following cards you will see some of the things I have worked
    on during my free time or have been open sourced. These are the code
    endevours which are <i>cohesive</i> enough to be called a project and not a
    brainfart.<br /><br /> I am a curious person by nature, always trying to
    learn and attracted to new things. I believe learning is a never-ending
    wheel, especially in the current tech and data landscape. <br />
    <br />The projects listed below have allowed me to gain a deeper
    understanding of some transversal technologies that I do not get to employ
    in my day-to-day job. These "pet projects" range from web app development
    using Flask, to IoT services in Arduino and MQTT, to Javascript development
    to control a robot!
    <br />
    <br />
    Oh, and also this exact website you are visiting, built on top of Svelte and
    SvelteKit!
  </p>
</div>

{#if data.error}
  <div class="error-message">
    <p>⚠️ Unable to load projects at the moment. Please try again later.</p>
    <p><small>Error: {data.error}</small></p>
  </div>
{:else if data.repos && data.repos.length > 0}
  <div class="box">
    <RepoCarousel repositories={data.repos} />
  </div>
{:else}
  <div class="loading-message">
    <p>Loading projects...</p>
  </div>
{/if}

<style>
  .landing_title {
    padding-bottom: var(--size-fluid-3);
  }

  .box {
    height: var(--size-fluid-12);
    width: var(--size-fluid-12);
  }

  .error-message {
    text-align: center;
    padding: var(--size-fluid-4);
    background-color: var(--surface-2);
    border-radius: var(--radius-3);
    margin: var(--size-fluid-3) 0;
  }

  .loading-message {
    text-align: center;
    padding: var(--size-fluid-4);
    color: var(--text-2);
  }
</style>

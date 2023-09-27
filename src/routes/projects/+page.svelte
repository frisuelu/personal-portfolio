<script>
  import Showcase from "$lib/components/Showcase.svelte";

  // Receive the repository information on load
  export let data;
</script>

<h2>Code repositories and descriptions</h2>
<h1>Data Science projects I have worked on</h1>
<p>
  In the following cards you can see some of the DS projects I have worked on. I
  am a curious person by nature, always trying to learn and attracted to new
  things. I believe learning is a never-ending wheel, specially in the current
  tech and data landscape. <br />
  <br />The projects listed below have allowed me to gain a deeper understanding
  of some transversal technologies that I do not get to employ in my day-to-day
  job. These "pet projects" range from web app development using Flask, to IoT
  services in Arduino and MQTT, to Javascript development to control a robot!
  <br />
  <br />
  Another interesting project currently in the works is this exact website you are
  visiting using Svelte and SvelteKit!
</p>

<div class="box">
  <Showcase repositories={data.repos} />
</div>

<style>
  .box {
    height: var(--size-fluid-12);
    width: var(--size-fluid-12);
  }
</style>

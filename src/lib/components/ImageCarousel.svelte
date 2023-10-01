<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";

  // Load the images from the folder
  export let images;

  // So the showcase can adapt to the number of elements
  export let particlesShown = 1;
  export let particlesScrolled = 1;
</script>

{#if browser}
  <Carousel
    let:loaded
    autoplay
    autoplayDuration={0}
    duration={2500}
    timingFunction="linear"
    dots={false}
    arrows={false}
    particlesToShow={particlesShown}
    particlesToScroll={particlesScrolled}
  >
    {#each images as src, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <img {src} alt="Carousel - Photo {imageIndex}" />
        {/if}
      </div>
    {/each}
  </Carousel>
{/if}

<style>
  .img-container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size-fluid-2);
    margin-bottom: var(--size-fluid-2);
    block-size: var(--size-fluid-10);
    align-items: center;
    justify-content: center;
  }

  .img-container img {
    max-height: 80%;
    max-width: 80%;
  }
</style>

<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";

  // Load the images from the folder
  export let images;
</script>

{#if browser}
  <Carousel
    let:loaded
    autoplay
    autoplayDuration={2500}
    autoplayProgressVisible
    pauseOnFocus
  >
    {#each images as src, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <img
            class="thumbnail"
            {src}
            alt="Carousel - Photo {imageIndex}"
          />
        {/if}
      </div>
    {/each}
  </Carousel>
{/if}

<style>
  .thumbnail {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size-fluid-2);
    margin-bottom: var(--size-fluid-2);
    block-size: var(--size-fluid-10);
  }
</style>

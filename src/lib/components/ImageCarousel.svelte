<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";

  // Load the images from the folder
  export let images;

  // So the showcase can adapt to the number of elements
  export let particlesShown = 1;
  export let particlesScrolled = 1;

  // Filter out any invalid image paths
  $: validImages = images ? images.filter(img => img && img.trim() !== '') : [];
</script>

{#if browser && validImages.length > 0}
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
    {#each validImages as src, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <img 
            {src} 
            alt="Carousel - Photo {imageIndex}" 
            on:error={(e) => {
              console.warn(`Failed to load image: ${src}`);
              e.target.style.display = 'none';
            }}
          />
        {/if}
      </div>
    {/each}
  </Carousel>
{:else if browser && (!validImages || validImages.length === 0)}
  <div class="no-images">
    <p>No images available</p>
  </div>
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
    object-fit: contain;
  }

  .no-images {
    text-align: center;
    padding: var(--size-fluid-4);
    color: var(--text-2);
  }
</style>

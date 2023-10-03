<script>
  export let src = "";
  export let video_title;
  let videoId = "";

  // Function to extract the Vimeo video ID
  function getVideoId(src) {
    const match = src.match(/vimeo\.com\/(?:video\/|)(\d+)/);
    if (match) {
      return match[1];
    }
    return null;
  }

  $: videoId = getVideoId(src);
</script>

<div class="container" style="--aspect-ratio: 16/9;">
  {#if videoId}
    <iframe
      class="responsive-iframe"
      title={video_title}
      width="640"
      height="360"
      src={`https://player.vimeo.com/video/${videoId}`}
      frameborder="0"
      allowfullscreen
    />
  {:else}
    <p>Invalid Vimeo video URL</p>
  {/if}
</div>

<style>
  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }

  /* Then style the iframe to fit in the container div with full height and width */
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>

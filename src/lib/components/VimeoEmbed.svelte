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

<div style="--aspect-ratio: 16/9;">
  {#if videoId}
    <iframe
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
</style>

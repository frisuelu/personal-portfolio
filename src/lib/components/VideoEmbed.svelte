<script>
  export let src = "";
  export let video_title;
  let videoId = "";

  // Function to extract the video ID from the URL
  function getVideoId(src) {
    const match = src.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^?&"'>]+)/
    );
    if (match) {
      return match[1];
    }
    return null;
  }

  $: videoId = getVideoId(src);
</script>

<div class="video-container">
  {#if videoId}
    <iframe
      title={video_title}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allowfullscreen
    />
  {:else}
    <p>Invalid video URL</p>
  {/if}
</div>

<style>
  /* Add CSS styling for your video container here */
</style>

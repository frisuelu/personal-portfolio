<script>
  export let src = "";
  export let video_title;
  let videoId = "";
  let timestamp = "";

  // Function to extract the video ID and timestamp from the URL
  function getVideoIdAndTimestamp(src) {
    const match = src.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^?&"'>]+)/
    );
    if (match) {
      videoId = match[1];

      // Extract timestamp if present in the URL
      const timestampMatch = src.match(/[?&]t=([0-9hms]+)/);
      if (timestampMatch) {
        timestamp = timestampMatch[1];
      }
    }
  }

  // Function to parse the timestamp into seconds
  function parseTimestamp(timestamp) {
    let seconds = 0;
    const timeRegex = /(\d+)(h|m|s)/g;
    let match;
    while ((match = timeRegex.exec(timestamp)) !== null) {
      const value = parseInt(match[1]);
      const unit = match[2];
      switch (unit) {
        case "h":
          seconds += value * 3600;
          break;
        case "m":
          seconds += value * 60;
          break;
        case "s":
          seconds += value;
          break;
        default:
          break;
      }
    }
    return seconds;
  }

  $: {
    getVideoIdAndTimestamp(src);
  }
</script>

<div class="container" style="--aspect-ratio: 16/9;">
  {#if videoId}
    <iframe
      class="responsive-iframe"
      title={video_title}
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}${
        timestamp ? `?start=${parseTimestamp(timestamp)}` : ""
      }`}
      frameborder="0"
      allowfullscreen
    />
  {:else}
    <p>Invalid video URL</p>
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

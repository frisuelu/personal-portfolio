<script>
  export let playlistSrc = "";
  export let playlist_title;
  let playlistId = "";

  // Function to extract the playlist ID from the URL
  function getPlaylistId(playlistSrc) {
    const match = playlistSrc.match(/\?list=([A-Za-z0-9_-]+)/);
    if (match) {
      return match[1];
    }
    return null;
  }

  $: playlistId = getPlaylistId(playlistSrc);
</script>

<div class="container" style="--aspect-ratio: 16/9;">
  {#if playlistId}
    <iframe
      class="responsive-iframe"
      title={playlist_title}
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
      frameborder="0"
      allowfullscreen
    />
  {:else}
    <p>Invalid playlist URL</p>
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

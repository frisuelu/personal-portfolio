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

<div style="--aspect-ratio: 16/9;">
  {#if playlistId}
    <iframe
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
</style>

<script>
  import YoutubeEmbed from "$lib/components/YoutubeEmbed.svelte";
  import YoutubePlaylistEmbed from "$lib/components/YoutubePlaylistEmbed.svelte";
  import VimeoEmbed from "$lib/components/VimeoEmbed.svelte";

  // Responsive grid component
  import Grid from "svelte-grid-responsive";
</script>

<h1>
  <b>Talks, conferences and content</b>
</h1>

<p>
  <br />I have participated in multiple university talks and conferences where I
  have had the opportunity to share my knowledge and experiences around data
  with both technical and young people interested in getting into the field of
  Data Science, as well as non-technical people that are trying to understand
  what data entails and how it will impact them (this goes doublefold for
  businesses trying to become data-driven).
</p>

<!-- Add below the embedded content from Youtube, Twitch, LinkedIn... -->
<!-- https://vimeo.com/836601829 -->
<!-- https://www.youtube.com/watch?v=CWaalYJR8qI&t=10486s -->
<!-- https://youtube.com/playlist?list=PLfcYOdV5W3jCNdvrpBgk-OL3uaIhDUQfA&si=j2isE1i7TNSXEy3a -->
<!-- https://media.licdn.com/dms/image/C4E22AQHZ9t2-Y3gl0Q/feedshare-shrink_2048_1536/0/1650557116329?e=1698883200&v=beta&t=3BRTxZojS1Za7pvNg6hT6F0Kb9aISbwpzyDkm8_uTOY -->
<!-- https://media.licdn.com/dms/image/C4E22AQEvkByM4TMppQ/feedshare-shrink_1280/0/1650557114558?e=1698883200&v=beta&t=00c1VxlMrX811tEgwNJ8g1n0TElgNmONXJA4QCCTWSk -->
<!-- https://media.licdn.com/dms/image/D4D22AQGGm5A8fGQsQw/feedshare-shrink_1280/0/1680681505869?e=1698883200&v=beta&t=53VyXcu1TNSSKi5yUOeWUs7vP-k9y9l9ItVH4jkHWAA -->
<!-- https://media.licdn.com/dms/image/D4D22AQGRm2KFmJiPWw/feedshare-shrink_1280/0/1680681504991?e=1698883200&v=beta&t=hG4qSH5Vo0l88rfCTYCHhxrYSwlarKy64_Ewn0-UmEI -->
<!-- https://media.licdn.com/dms/image/C4E22AQGA3tgYWpvNZQ/feedshare-shrink_800/0/1665670942087?e=1698883200&v=beta&t=XMvn2A57Koj1W6l8HZ-UqYvsjxGAjduuMKrabWaYwHU -->

<Grid container gutter={10} columns={2}>
  <Grid>
    <VimeoEmbed
      src="https://vimeo.com/836601829"
      video_title="DataForum 2023 - short version"
    />
  </Grid>
  <Grid>
    <YoutubeEmbed
      src="https://www.youtube.com/watch?v=CWaalYJR8qI&t=10486s"
      video_title="DataForum conference June 2023"
    />
  </Grid>
  <Grid>
    <YoutubePlaylistEmbed
      playlistSrc="https://youtube.com/playlist?list=PLfcYOdV5W3jCNdvrpBgk-OL3uaIhDUQfA&si=j2isE1i7TNSXEy3a"
      playlist_title="DEADPROGRAM Twitch streamings"
    />
  </Grid>
</Grid>

<style>
</style>

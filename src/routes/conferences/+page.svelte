<script>
  import YoutubeEmbed from "$lib/components/YoutubeEmbed.svelte";
  import YoutubePlaylistEmbed from "$lib/components/YoutubePlaylistEmbed.svelte";
  import VimeoEmbed from "$lib/components/VimeoEmbed.svelte";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";

  // Responsive grid component
  import Grid from "svelte-grid-responsive";

  let anbanImages = [
    "images/conferences/anban_conference.jpg",
    "images/conferences/anban_conference_2.jpg",
    "images/conferences/anban_conference_3.jpg",
  ];

  let universityImages = [
    "images/conferences/university_1.jpg",
    "images/conferences/university_2.jpg",
    "images/conferences/university_3.jpg",
    "images/conferences/university_4.jpg",
    "images/conferences/university_5.jpg",
  ];
</script>

<!-- SEO -->
<svelte:head>
  <title>Conferences - Manuel Souto Juan</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Conferences and public talks by Manuel Souto Juan"
  />
  <meta
    name="keywords"
    content="Data Science, AI, Machine Learning, Technology"
  />
  <meta name="author" content="Manuel Souto Juan" />
  <meta property="og:type" content="video" />
  <meta property="og:title" content="Conferences - Manuel Souto Juan" />
</svelte:head>

<div align="center" class="landing_title">
  <h1>
    <b>Talks, conferences and content</b>
  </h1>
  <p>
    <br />I have participated in multiple university talks and conferences where
    I have had the opportunity to share my knowledge and experiences around data
    with both technical and young people interested in getting into the field of
    Data Science, as well as non-technical people that are trying to understand
    what data entails and how it will impact them (this goes doublefold for
    businesses trying to become data-driven).
  </p>
</div>

<!-- Add below the embedded content from Youtube, Twitch, LinkedIn... -->
<!-- https://media.licdn.com/dms/image/C4E22AQHZ9t2-Y3gl0Q/feedshare-shrink_2048_1536/0/1650557116329?e=1698883200&v=beta&t=3BRTxZojS1Za7pvNg6hT6F0Kb9aISbwpzyDkm8_uTOY -->
<!-- https://media.licdn.com/dms/image/C4E22AQEvkByM4TMppQ/feedshare-shrink_1280/0/1650557114558?e=1698883200&v=beta&t=00c1VxlMrX811tEgwNJ8g1n0TElgNmONXJA4QCCTWSk -->
<!-- https://media.licdn.com/dms/image/D4D22AQGGm5A8fGQsQw/feedshare-shrink_1280/0/1680681505869?e=1698883200&v=beta&t=53VyXcu1TNSSKi5yUOeWUs7vP-k9y9l9ItVH4jkHWAA -->
<!-- https://media.licdn.com/dms/image/D4D22AQGRm2KFmJiPWw/feedshare-shrink_1280/0/1680681504991?e=1698883200&v=beta&t=hG4qSH5Vo0l88rfCTYCHhxrYSwlarKy64_Ewn0-UmEI -->
<!-- https://media.licdn.com/dms/image/C4E22AQGA3tgYWpvNZQ/feedshare-shrink_800/0/1665670942087?e=1698883200&v=beta&t=XMvn2A57Koj1W6l8HZ-UqYvsjxGAjduuMKrabWaYwHU -->

<div class="centered_grid" align="center">
  <div class="prose">
    <h2>DATAfórum 2023</h2>
    <p>
      <br />I had the pleasure of attending the DataForum event organised by the
      Spanish Ministry of Justice on June, where I presented a short masterclass
      on AI for people in the government and legal space. Although we know not
      everything is ChatGPT, in the end we are still talking about it all the
      time...
    </p>
  </div>
  <div class="video_grid">
    <Grid container gutter={40} columns={2}>
      <Grid xs={2} lg={1}>
        <VimeoEmbed
          src="https://vimeo.com/836601829"
          video_title="DataForum 2023 - short version"
        />
      </Grid>
      <Grid xs={2} lg={1}>
        <YoutubeEmbed
          src="https://www.youtube.com/watch?v=CWaalYJR8qI&t=10486s"
          video_title="DataForum conference June 2023"
        />
      </Grid>
    </Grid>
  </div>
</div>

<div align="center" class="half_text">
  <div class="image_carousel">
    <ImageCarousel
      images={anbanImages}
      particlesShown={2}
      particlesScrolled={1}
    />
  </div>
  <div align="left" class="prose">
    <h2>ANBAN conference</h2>
    <p>
      <br /><a
        href="https://www.linkedin.com/company/big-data-asociacion"
        title="ANBAN LinkedIn profile">ANBAN</a
      > (Asociación nacional Big Data y Analytics) is a non-for-profit association
      focused on promoting data related knowledge and activities. I was invited as
      part of a group of proffesionals in the sector to discuss how I use data in
      my day-to-day job to solve real-world problems.
    </p>
  </div>
</div>

<div align="center" class="half_text">
  <div align="left" class="prose">
    <h2>Collaborations with University of Oviedo</h2>
    <p>
      <br />As a former alumni of the Faculty of Sciencies, I keep a strong
      relationship with the University up to this day. During these past years I
      have attended several events and chats with current students to discuss
      the future of data, cloud services, projects I have worked on, and overall
      guidance into what they can expect of the sector if they so choose to
      pursue this path.
    </p>
  </div>
  <div class="image_carousel">
    <ImageCarousel
      images={universityImages}
      particlesShown={2}
      particlesScrolled={1}
    />
  </div>
</div>

<div align="center" class="half_text">
  <div align="left" class="prose">
    <h2>TinyGo streamings</h2>
    <p>
      <br />I have also had the pleasure to collaborate with Ron Evans (AKA
      <a href="https://github.com/deadprogram" title="@deadprogram"
        >@deadprogram</a
      >), Go guru, technologist for hire, influencer and overall amazing person!
      In the following Youtube playlist where the Twitch streamings are
      recorded, I was leveraging the Go implementation of OpenCV named
      <b>GoCV</b> to interface an object detection model to detect... cows
      (don't ask about that, we're a bit weird in Asturias 😅). <br /><br />
      I have also learned a lot about Go, TinyGo and microdevices (check out the
      <a
        href="https://github.com/frisuelu/physical-LED-dashboard"
        title="GitHub repo for LED dashboard">LED dashboard project</a
      > I developed if you are interested!).
    </p>
  </div>
  <div class="individual_video">
    <Grid container>
      <YoutubePlaylistEmbed
        playlistSrc="https://youtube.com/playlist?list=PLfcYOdV5W3jCNdvrpBgk-OL3uaIhDUQfA&si=j2isE1i7TNSXEy3a"
        playlist_title="DEADPROGRAM Twitch streamings"
      />
    </Grid>
  </div>
</div>

<style>
  .landing_title {
    padding-bottom: var(--size-fluid-3);
  }

  .centered_grid {
    padding-top: var(--size-fluid-3);
    padding-bottom: var(--size-fluid-5);
    border-top: 0.5px solid var(--border);
  }

  .video_grid {
    padding-top: var(--size-fluid-5);
  }

  @media (min-width: 768px) {
    .video_grid {
      flex-direction: row; /* Side by side on larger screens */
      column-gap: var(--size-fluid-3);
    }
  }

  .half_text {
    padding-top: var(--size-fluid-5);
    padding-bottom: var(--size-fluid-5);
    border-top: 0.5px solid var(--border);
    row-gap: var(--size-fluid-3);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .half_text > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Additional styles for large screens */
  @media (min-width: 1200px) {
    .half_text {
      flex-direction: row; /* Side by side on larger screens */
      column-gap: var(--size-fluid-3);
    }
  }

  .image_carousel {
    align-items: center;
    width: 60%; /* Adjust width as needed */
    max-width: 100%; /* Ensures the carousel doesn't exceed its parent container */
  }

  .individual_video {
    align-items: center;
    width: 80%; /* Adjust width as needed */
    max-width: 100%; /* Ensures the carousel doesn't exceed its parent container */
  }
</style>

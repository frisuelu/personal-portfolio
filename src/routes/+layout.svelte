<script>
  import "../app.css";
  import "./styles.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // for page transitions
  import { fade } from "svelte/transition";
  export let data;
</script>

<link
  rel="stylesheet"
  href="https://cdn.tailgrids.com/tailgrids-fallback.css"
/>

<div class="app">
  {#key data.currentRoute}
    <Header />
    <main in:fade={{ duration: 500, delay: 150 }} out:fade={{ duration: 300 }}>
      <slot />
    </main>
    <Footer />
  {/key}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 84rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

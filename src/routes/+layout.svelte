<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "open-props/style";
  import "open-props/normalize";
  import "open-props/buttons";

  // for page transitions
  import { fade } from "svelte/transition";
  export let data;
</script>

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
    height: 100%;
    max-inline-size: 1440px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: var(--size-7);
  }

  main {
    padding-block: var(--size-9);
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 84rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 1440px) {
    .app {
      padding-inline: 0;
    }
  }
</style>

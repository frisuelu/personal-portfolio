<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "open-props/style";
  import "open-props/normalize";
  import "open-props/buttons";

  // For page transitions and header/footer hiding
  import { fade } from "svelte/transition";
  export let data;
</script>

<div class="app">
  {#key data.currentRoute}
    <!-- Hide header + footer on landing page -->
    {#if data.currentRoute !== "/personal-portfolio/"}
      <div class="Header-Footer"><Header /></div>
    {/if}
    <main in:fade={{ duration: 800, delay: 150 }} out:fade={{ duration: 500 }}>
      <slot />
    </main>
    {#if data.currentRoute !== "/personal-portfolio/"}
      <div class="Header-Footer"><Footer /></div>
    {/if}
  {/key}
</div>

<style>
  .app {
    height: 100%;
    margin-inline: auto;
    padding-inline: var(--size-7);
  }

  main {
    padding-block: var(--size-10);
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (max-width: 1200px) {
    main {
      padding: var(--size-3);
    }
    .app {
      padding-inline: 0;
    }
    .Header-Footer {
      padding-inline: var(--size-7);
    }
  }
</style>

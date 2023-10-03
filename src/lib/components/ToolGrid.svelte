<script>
  // Responsive grid component
  import Grid from "svelte-grid-responsive";

  // Images to display
  export let images;

  // Extract the tool name from the image path
  function extractToolName(url) {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1]; // Extract the last part of the URL (file name with extension)
    const nameWithoutExtension = fileName.split(".")[0]; // Remove the file extension
    const words = nameWithoutExtension.split("-"); // Split words separated by hyphens
    const toolName = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); // Capitalize the first letter of each word
    return toolName;
  }

  const toolNames = images.map((url) => extractToolName(url));

  // Grid params
  export let gutterSize;
  export let columnNumber;
</script>

<Grid container gutter={gutterSize} columns={columnNumber}>
  {#each images as logo, idx}
    <Grid xs={1} lg={1}>
      <img
        class="logo"
        src={logo}
        alt={toolNames[idx]}
        title={toolNames[idx]}
      />
    </Grid>
  {/each}
</Grid>

<style>
  .logo {
    width: var(--size-10);
    height: var(--size-10);
    object-fit: contain;
    border: 3px solid var(--text-1);
    border-radius: var(--radius-3);
    padding: var(--size-1);
  }

@media (prefers-color-scheme: light) {
    .logo {
      background-color: var(--text-1);
    }
  }

@media (prefers-color-scheme: dark) {
    .logo {
      background-color: var(--gray-1);
    }
  }

  @media (max-width: 768px) {
    .logo {
      width: var(--size-8);
      height: var(--size-8);
    }
  }
</style>

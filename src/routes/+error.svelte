<script>
  import { page } from "$app/stores";
</script>

<div class="error">
  <h1>Oops, you did a bad thing...</h1>
  <h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
  .error {
    height: 100%;
    display: grid;
    place-content: center;
  }
</style>

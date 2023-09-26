<script>
  export let repo_name;
  export let repo_url;
  export let repo_description;
  export let repo_image;
</script>

<link
  rel="stylesheet"
  href="https://cdn.tailgrids.com/tailgrids-fallback.css"
/>

<div class="bg-white rounded-lg overflow-hidden shadow-lg">
  <img src={repo_image} alt= "GitHub repository" class="w-full h-40 object-cover" />
  <div class="p-4">
    <h3 class="text-xl font-semibold mb-2">{repo_name}</h3>
    <p class="text-gray-600 mb-4">{repo_description}</p>
    <a
      href={repo_url}
      target="_blank"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
      >View on GitHub</a
    >
  </div>
</div>

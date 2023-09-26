<script>
  import github_logo from "$lib/images/github.svg";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <!-- Project Card 1 -->
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={github_logo} alt="Project 1" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">Project 1 Title</h3>
      <p class="text-gray-600 mb-4">Short description of Project 1.</p>
      <a
        href="https://github.com/your-username/project1"
        target="_blank"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
        >View on GitHub</a
      >
      <a
        href="https://github.com/your-username/project1"
        target="_blank"
        class="text-white font-bold py-10 px-4 w-20 h-20 inline-block"
      >
        <img src={github_logo} alt="GitHub SVG logo" />
      </a>
    </div>
  </div>

  <!-- Project Card 2 -->
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={github_logo} alt="Project 2" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">Project 2 Title</h3>
      <p class="text-gray-600 mb-4">Short description of Project 2.</p>
      <a
        href="https://github.com/your-username/project2"
        target="_blank"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
        >View on GitHub</a
      >
    </div>
  </div>

  <!-- Repeat this structure for more projects -->
</div>

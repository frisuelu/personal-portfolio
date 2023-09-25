<script>
  import linkedin_logo from "$lib/images/linkedin.svg";
  import github_logo from "$lib/images/github.svg";
  import email_logo from "$lib/images/email.svg";
</script>

<footer class="bg-gray-600 py-4">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div class="mb-4 md:mb-0 flex">
      <a href="https://www.linkedin.com/in/manuel-souto-juan/" target="_blank" class="text-white mr-4">
        <img src={linkedin_logo} alt="LinkedIn" class="w-6 h-6">
      </a>
      <a href="https://www.github.com/frisuelu" target="_blank" class="text-white mr-4">
        <img src={github_logo} alt="GitHub" class="w-6 h-6">
      </a>
      <a href="mailto:manuelsoju@hotmail.com" class="text-white">
        <img src={email_logo} alt="Email" class="w-6 h-6">
      </a>
    </div>
    <div class="md:flex">
      <a href="/" class="text-white">Home</a>
      <a href="/projects" class="text-white ml-4">Projects</a>
      <a href="/blog" class="text-white ml-4">Blog</a>
      <a href="/conferences" class="text-white ml-4">Conferences</a>
      <a href="/about" class="text-white ml-4">About me</a>
    </div>
  </div>
</footer>

<style>
  /* Add any custom styles for the footer here */
</style>

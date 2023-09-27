<script>
  export let repo_name;
  export let repo_url;
  export let repo_description;
</script>

<div>
  <img src="src/lib/images/{repo_name}.jpg" alt="Thumbnail" />
  <div>
    <h3>{repo_name}</h3>
    <p>{repo_description}</p>
    <a href={repo_url}>View on GitHub</a>
  </div>
</div>

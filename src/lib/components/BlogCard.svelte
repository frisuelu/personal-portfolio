<script>
  export let thumbnail_url;
  export let thumbnail_alt;
  export let article_url;
  export let date;
  export let title;
  export let subtitle;
  export let media;
</script>

<div class="container" align="center">
  <div class="blog_thumbnail" align="center">
    <img src={thumbnail_url} alt={thumbnail_alt} />
  </div>
  <div class="blog_content">
    <span class="button">
      {date}
    </span>
    <span class="button">
      {media}
    </span>
    <div class="blog_description">
      <h4>
        <a href={article_url}>
          {title}
        </a>
      </h4>
      <p>
        {subtitle}
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: var(--size-fluid-4);
    padding: var(--size-relative-5);
    width: var(--size-15);
    display: flex;
    flex-direction: column;
  }

  .blog_thumbnail {
    height: var(--size-fluid-13);
    width: var(--size-15);
    margin-bottom: var(
      --size-fluid-3
    ); /* Add margin between thumbnail and content */
    object-fit: cover;
  }

  .blog_content {
    flex: 1; /* Allow the content to expand and fill the available space */
  }

  .blog_description {
    margin-top: var(--size-relative-6);
  }

  @media (max-width: 768px) {
    .blog_thumbnail {
      height: var(--size-fluid-8);
      width: var(--size-fluid-10);
      align-items: center;
    }
    .container {
      width: 70%;
      padding: var(--size-1);
      align-items: center;
      justify-content: center;
    }
    .container p {
      font-size: var(--size-3);
    }
    .container h4 {
      font-size: var(--size-4);
    }
    .button {
      font-size: var(--size-2);
    }
  }
</style>

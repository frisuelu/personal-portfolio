<script>
  export let thumbnail_url;
  export let thumbnail_alt;
  export let article_url;
  export let date;
  export let title;
  export let subtitle;
</script>

<link
  rel="stylesheet"
  href="https://cdn.tailgrids.com/tailgrids-fallback.css"
/>

<!-- New item -->
<div class="w-full md:w-1/2 lg:w-1/3 px-4">
  <div class="max-w-[370px] mx-auto mb-10">
    <div class="rounded overflow-hidden mb-8">
      <img src={thumbnail_url} alt={thumbnail_alt} class="w-full" />
    </div>
    <div>
      <span
        class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
      >
        {date}
      </span>
      <h3>
        <a
          href={article_url}
          class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
        >
          {title}
        </a>
      </h3>
      <p class="text-base text-body-color">
        {subtitle}
      </p>
    </div>
  </div>
</div>

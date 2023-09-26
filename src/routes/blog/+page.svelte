<script>
  import Carousel from "$lib/components/Carousel.svelte";

  // Retrieve the dynamic available posts
  export let data;
</script>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
  <div class="container">
    <div class="flex flex-wrap justify-center -mx-4">
      <div class="w-full px-4">
        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <span class="font-semibold text-lg text-primary mb-2 block">
            Medium Blog Posts
          </span>
          <h2
            class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
          >
            <b>Sharing is caring!</b>
          </h2>
          <p class="text-base text-body-color">
            During my career I have learned and experienced many things, so I
            have taken the time to condense some of the most relevant knowledge
            I have gained. These are all Medium embeddings of the actual posts
            for content duplicity reasons, but in the future I want to keep
            updating this section with new organic content.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Carousel />

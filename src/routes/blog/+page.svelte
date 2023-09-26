<script>
  import Carousel from "$lib/components/Carousel.svelte";

  // Retrieve the dynamic available posts
  export let data;
</script>


<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
  <div class="container">
    <div class="flex flex-wrap justify-center -mx-4">
      <div class="w-full px-4">
        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[760px]">
          <span class="font-semibold text-xl text-primary mb-2 block">
            Medium Blog Posts
          </span>
          <h2
            class="
                  font-bold
                  text-4xl
                  sm:text-5xl
                  md:text-[50px]
                  text-dark
                  mb-8
                  "
          >
            Sharing is caring!
          </h2>
          <p class="text-lg sm:text-xl md:text-xl text-body-color">
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

<Carousel posts={data.posts}/>

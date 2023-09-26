<script>
  import Showcase from "$lib/components/Showcase.svelte";
</script>

<link
  rel="stylesheet"
  href="https://cdn.tailgrids.com/tailgrids-fallback.css"
/>

<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
  <div class="container">
    <div class="flex flex-wrap justify-center -mx-4">
      <div class="w-full px-4">
        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[760px]">
          <span class="font-semibold text-xl text-primary mb-2 block">
            Code repositories and descriptions
          </span>
          <h2
            class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[50px]
                  text-dark
                  mb-4
                  "
          >
            Data Science projects I have worked on
          </h2>
          <p class="text-lg sm:text-xl md:text-xl text-body-color">
            In the following cards you can see some of the DS projects I have
            worked on. I am a curious person by nature, always trying to learn
            and attracted to new things. I believe learning is a never-ending
            wheel, specially in the current tech and data landscape. <br />
            <br />The projects listed below have allowed me to gain a deeper
            understanding of some transversal technologies that I do not get to
            employ in my day-to-day job. These "pet projects" range from web app
            development using Flask, to IoT services in Arduino and MQTT, to
            Javascript development to control a robot! <br />
            <br />
            Another interesting project currently in the works is this exact website
            you are visiting using Svelte and SvelteKit!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Showcase />

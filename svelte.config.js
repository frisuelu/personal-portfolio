import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: "warn",
      // Add entries for the endpoints so they are rendered on GitHub Pages
      entries: [
        "*",
        "/api/blogpost",
        "/api/github-repos",
      ],
    },
    paths: {
      base: process.env.NODE_ENV === "production" ? "/personal-portfolio" : "",
    },
  },
  extensions: [".svelte", ".md"],
  preprocess: [sveltePreprocess(), mdsvex({ extensions: [".md"] })],
};
export default config;

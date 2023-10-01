import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

// For deployment or local testing
const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
    }),
    paths: {
      base: dev ? "" : process.env.BASE_PATH,
    },
  },
  extensions: [".svelte", ".md"],
  preprocess: [sveltePreprocess(), mdsvex({ extensions: [".md"] })],
};
export default config;

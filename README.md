# Personal portfolio website with SvelteKit

Build my personal portfolio using [Svelte](https://svelte.dev/) and Sveltekit for static rendering, as well
as styling using CSS. Showcase projects, experience, professional trajectory, blog posts, conferences, and more.

**NOTE**: still figuring out why exactly the _projects_ and _blog_ pages sometimes don't load at first on Github
Pages, but when reloaded they do... They work fine locally, must be an issue with the `server.js` files that render the
dynamic loading of both articles and blog posts.

## How to use

```bash
npm run preview
npm run build
npm run deploy
```

The last one publishes the required static files to the `gh-pages` branch.

## TASKLIST

- [ ] Add hover animation for tools with their name
- [ ] Correct theme display for tools (dark/light modes)
- [ ] New route for past projects
- [ ] Images in "About" section
- [ ] Automate deployment on push to main

## REFERENCES

- [Markdown support and routing with SvelteKit](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)
- [Building a blog with Svelte + styling](https://joyofcode.xyz/sveltekit-markdown-blog#project-setup)
- And, as always, ChatGPT for being there :)

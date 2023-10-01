// Preload the Markdown blog posts before rendering the .svelte file

export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, subtitle, date, thumbnail_url, thumbnail_alt, media } =
    post.metadata;
  const content = post.default;

  return {
    content,
    title,
    subtitle,
    date,
    thumbnail_url,
    thumbnail_alt,
    media,
  };
}

// Required to add this or otherwise the static generation
// won't index the articles

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return [
    { slug: "cookie-less-marketing" },
    { slug: "dark-matter-I" },
    { slug: "dark-matter-II" },
    { slug: "data-clean-rooms" },
    { slug: "transformers-I" },
    { slug: "transformers-II" },
  ];
}

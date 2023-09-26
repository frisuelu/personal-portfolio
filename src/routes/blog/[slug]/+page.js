// Preload the Markdown blog posts before rendering the .svelte file
// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, subtitle, date, thumbnail_url, thumbnail_alt } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    subtitle,
    date,
    thumbnail_url,
    thumbnail_alt,
  };
}

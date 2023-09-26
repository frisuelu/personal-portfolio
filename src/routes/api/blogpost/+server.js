// API endpoint to retrieve dynamic blog post data sorted by date
import { fetchMarkdownPosts } from "$lib/utils/index.js";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    // The ? symbols checks if the date field exists, we could try/catch it
    return new Date(b?.meta?.date) - new Date(a?.meta?.date);
  });

  return json(sortedPosts);
};

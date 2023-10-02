// Prefetch the available posts using the API endpoint
export const load = async ({ fetch }) => {
  try {
    const response = await fetch(`/api/blogpost`);
    const posts = await response.json();

    return {
      posts,
    };
  } catch (e) {
    console.error(`Error loading blog post endpoint /: ${error}`);
    return null; // Return an empty array in case of an error
  }
};

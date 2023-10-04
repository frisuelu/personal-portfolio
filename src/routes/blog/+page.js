/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  try {
    //const response = await fetch(`/api/blogpost`);
    const response = await fetch(`/personal-portfolio/api/blogpost`);
    const posts = await response.json();

    return {
      posts,
    };
  } catch (error) {
    console.error(`Error fetching blog post API /: ${error}`);
  }
};

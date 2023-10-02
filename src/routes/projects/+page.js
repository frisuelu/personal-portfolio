/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  try {
    const response = await fetch(`/personal-portfolio/api/github-repos`);
    const repos = await response.json();

    return {
      repos,
    };
  } catch (error) {
    console.error(`Error fetching repo internal API : ${error}`);
  }
};

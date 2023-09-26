export const load = async ({ fetch }) => {
  const response = await fetch(`/api/github-repos`);
  const repos = await response.json();

  return {
    repos,
  };
};

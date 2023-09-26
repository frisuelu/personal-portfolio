// Prefetch the available posts using the API endpoint
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/blogpost`);
	const posts = await response.json();

	return {
		posts
	};
};

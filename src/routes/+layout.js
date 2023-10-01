// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

// This loads before the layout
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};

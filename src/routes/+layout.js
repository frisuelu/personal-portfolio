// This loads before the layout
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};

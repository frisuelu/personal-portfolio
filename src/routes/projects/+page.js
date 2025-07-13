/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, url }) => {
  try {
    // Use relative path for development, full path for production
    const apiPath = url.pathname.includes('/personal-portfolio') 
      ? '/personal-portfolio/api/github-repos'
      : '/api/github-repos';
      
    const response = await fetch(apiPath);
    const result = await response.json();

    // Handle the new API response structure
    if (result.success && result.data) {
      return {
        repos: result.data,
        total: result.total
      };
    } else {
      console.error('GitHub API returned error:', result.error);
      return {
        repos: [],
        total: 0,
        error: result.error || 'Failed to fetch repositories'
      };
    }
  } catch (error) {
    console.error(`Error fetching repo internal API: ${error}`);
    return {
      repos: [],
      total: 0,
      error: 'Failed to fetch repositories'
    };
  }
};

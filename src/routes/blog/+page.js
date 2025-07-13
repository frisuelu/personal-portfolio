/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, url }) => {
  try {
    // Use relative path for development, full path for production
    const apiPath = url.pathname.includes('/personal-portfolio') 
      ? '/personal-portfolio/api/blogpost'
      : '/api/blogpost';
      
    const response = await fetch(apiPath);
    const result = await response.json();

    // Handle the new API response structure
    if (result.success && result.data) {
      return {
        posts: result.data,
        total: result.total
      };
    } else {
      console.error('Blog API returned error:', result.error);
      return {
        posts: [],
        total: 0,
        error: result.error || 'Failed to fetch blog posts'
      };
    }
  } catch (error) {
    console.error(`Error fetching blog post API: ${error}`);
    return {
      posts: [],
      total: 0,
      error: 'Failed to fetch blog posts'
    };
  }
};

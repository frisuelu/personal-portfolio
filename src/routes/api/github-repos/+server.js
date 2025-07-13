// Retrieve GitHub repos dynamically

export const prerender = true;

import { json } from "@sveltejs/kit";

export const GET = async ({ fetch }) => {
  const username = "frisuelu";

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repositories = await response.json();

    // Filter and sort repositories
    const filteredRepos = repositories
      .filter(repo => !repo.fork && repo.description) // Only non-forked repos with descriptions
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6); // Limit to 6 most recent

    return json({
      success: true,
      data: filteredRepos,
      total: repositories.length
    });
  } catch (error) {
    console.error(`Error loading GitHub repositories: ${error.message}`);
    
    return json({
      success: false,
      error: "Failed to fetch repositories",
      message: error.message
    }, { status: 500 });
  }
};

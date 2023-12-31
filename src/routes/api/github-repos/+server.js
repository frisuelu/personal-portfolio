// Retrieve GitHub repos dynamically

export const prerender = true;

import { json } from "@sveltejs/kit";

export const GET = async ({ fetch }) => {
  const username = "frisuelu";

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repositories = await response.json();

    return json(repositories);
  } catch (error) {
    // Handle any errors here
    console.error(`Error loading GitHub repositories /: ${error}`);
    return null; // Return an empty array in case of an error
  }
};

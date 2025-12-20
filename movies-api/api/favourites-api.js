//Add Favourites
export const addToFavourites = async (movie) => {
  const response = await fetch(
    'http://localhost:8080/api/movies/favourites',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to add favourite')
  }

  return response.json();
};

//Get Favourites
export const getFavourites = async () => {
    const response = await fetch (
        `http://localhost:8080/api/movies/favourites`
    )

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch favourites');
    }

    return await response.json();
}

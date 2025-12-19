//Add to favourites
export const addToFavourites = async (movie) => {
    const response = await fetch (
        `http://localhost:8080/api/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movieId: movie.id,
                title: movie.title,
                genres: movie.genres,
                poster_path: movie.poster_path,
                release_date: movie.release_date
            }),
        }
    );
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch reviews');
    }

    return await response.json();
};

//Get Favourites
export const getFavourites = async () => {
    const response = await fetch (
        `http://localhost:8080/api/favourites`
    )

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch favourites');
    }

    return await response.json();
}
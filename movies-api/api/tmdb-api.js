import fetch from 'node-fetch';

export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();

};

//Individual Movie
export const getMovie = async (id) => {
    const response = await fetch( 
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );

    const data = await response.json(); // await the JSON first

    if (!response.ok) {
        throw new Error(data.status_message || "Something went wrong");
    }

    return data;
};

//Movie Images
export const getMovieImages = async (id) => {

    const response = await fetch (
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();

}

//Get Reccomended Movies
export const getRecommended = async (id) => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch recommended movies');
    }

    return await response.json();
}

//Genres
export const getGenres = async () => {
    const response = await fetch (
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || 'Failed to fetch genres');
    }

    return await response.json();
}

//Get Upcoming
export const getUpcoming = async () => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || 'Failed to fetch genres');
    }

    return await response.json();
}

//Get Top Rated
export const getTopRated = async () => {
    const response = await fetch (
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || 'Failed to fetch top rated');
    }

    return await response.json();

}

//Get Popular Movies
export const getPopular = async () => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch popular movies');
    }

    return await response.json();
}

//Get Currently Showing
export const getCurrentlyShowing = async () => {
    const response = await fetch (
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch popular movies');
    }

    return await response.json();
}

//Get Movie Reviews
export const getMovieReviews = async (id) => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    )

        if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch reviews');
    }

    return await response.json();
}

//Add to favourites
export const addToFavourites = async (movieId) => {
    const response = await fetch (
        `http://localhost:8080/api/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({movieId})
        }
    );
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error (errorData.status_message || 'Failed to fetch reviews');
    }

    return await response.json();
    
}
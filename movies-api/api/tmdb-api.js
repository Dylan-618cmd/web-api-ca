import fetch from 'node-fetch';
import 'dotenv/config';

export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();

};

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

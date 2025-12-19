import express from 'express';
import asyncHandler from 'express-async-handler';
import { getFavourites, getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getUpcoming } from '../tmdb-api';
import { getTopRated } from '../tmdb-api';
import { getPopular } from '../tmdb-api';
import { getRecommended } from '../tmdb-api';
import { getCurrentlyShowing } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { addToFavourites } from '../tmdb-api';


const router = express.Router();

//Store favourites in an arry for now
let favourites = [];

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

//Individual Movies
router.get('/movie/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log("Backend got id:", id, typeof id);
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

//Movie Images
router.get('/movie/:id/images', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const images = await getMovieImages(id);
    res.status(200).json(images);
}));

//Movie genres
router.get('/genres', asyncHandler(async (req, res) => {
    const movieGenres = await getGenres();
    res.status(200).json(movieGenres);
}));

//Upcoming Movies
router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcoming();
    res.status(200).json(upcomingMovies);
}));

//Now playing Movies
router.get('/now-playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getCurrentlyShowing();
    res.status(200).json(nowPlaying);
}));

//Top Rated
router.get('/top-rated', asyncHandler(async (req, res) => {
    const topRated = await getTopRated();
    res.status(200).json(topRated);
}));

//Popular movies
router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopular();
    res.status(200).json(popularMovies);
}));

//Recommended Movies
router.get('/:id/recommendations', asyncHandler (async (req, res) => {
    const {id} = req.params;
    const recommendedMovies = await getRecommended(id);
    res.status(200).json(recommendedMovies);
}));

//Movie Reviews
router.get('/movie/:id/reviews', asyncHandler (async (req, res) => {
    const {id} = req.params;
    const movieReviews = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

//Add to favourites
router.post('/favourites', asyncHandler (async (req, res) => {
    const { movieId,
            title,
            genres, 
            poster_path, 
            release_date
        } = req.body;

        const favourite = {
        movieId,
        title,
        genres,
        poster_path,
        release_date
    };

    favourites.push(favourite);

    res.status(201).json({
        favourite,
        message: "Favourite added",
    });
}));

//Get favourites
router.get('/favourites', asyncHandler (async(req, res) => {
    res.status(200).json(favourites);
}))

export default router;
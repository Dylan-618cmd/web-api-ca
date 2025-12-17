import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getUpcoming } from '../tmdb-api';

const router = express.Router();

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

export default router;
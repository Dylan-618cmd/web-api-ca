import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api';

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/movie/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log("Backend got id:", id, typeof id);
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

export default router;
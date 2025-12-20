import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
 
  const { favorites: movieIds } = useContext(MoviesContext);

  const favoriteMovieQueries = useQueries({
    queries: movieIds.map((movieId) => ({
      queryKey: ["movie", { id: movieId }],
      queryFn: () => getMovie(movieId),
    })),
  });

  const isPending = favoriteMovieQueries.some((q) => q.isPending);

  if (isPending) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries
    .filter((q) => q.data)
    .map((q) => {
      q.data.genre_ids = q.data.genres.map((g) => g.id);
      return q.data;
    });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );

}
export default FavoriteMoviesPage;
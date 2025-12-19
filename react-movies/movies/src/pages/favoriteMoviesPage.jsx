import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getFavourites } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
 
  const { data: favourites, isLoading, error } = useQuery({
  queryKey: ['favourites'],
  queryFn: getFavourites,  
});
  
  if (isPending) {
    return <Spinner />;
  }

  // Make sure genre_ids exist
  const movies = favourites.map((movie) => {
    movie.genre_ids = movie.genres?.map(g => g.id) || [];
    return movie;
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
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviePage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import RecommendedPage from "./pages/reccomendedMoviesPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <div className="container">
            <h1>Movies</h1>
            <Routes>
              <Route path="/" element={< StartPage />} />
              <Route path="/login" element={< LoginPage />} />
              <Route path="/signup" element={< SignUpPage />} />
              <Route path="/profile" element={< ProfilePage />} />
              <Route element={<ProtectedRoutes />}>
                  <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                  <Route path="/movies/upcoming" element={<UpcomingMoviesPage /> } />
                  <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
                  <Route path="/movies/:id" element={<MoviePage />} />
                  <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
                  <Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
                  <Route path="/movies/now-playing" element={<NowPlayingPage />} />
                  <Route path="/movies/popular" element={<PopularMoviesPage />} />
                  <Route path="/movies/:id/recommendations" element={<RecommendedPage />} />
                  <Route path="/discover" element={<HomePage />} />
                  <Route path="*" element={ <Navigate to="/" /> } />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          </AuthContextProvider>
      </BrowserRouter>
    </MoviesContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
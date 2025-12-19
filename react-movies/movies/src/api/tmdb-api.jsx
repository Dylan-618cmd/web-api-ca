export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/discover`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

//Single Movie Details
export const getMovie = (id) => {
  console.log("getMovie called with:", id, typeof id);
  return fetch(
    `http://localhost:8080/api/movies/movie/${id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Movie Images
export const getMovieImages = (id) => {
  return fetch(
    `http://localhost:8080/api/movies/movie/${id}/images`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  export const getGenres = () => {
    return fetch(
      `http://localhost:8080/api/movies/genres`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

//Movie reviews
export const getMovieReviews = (id) => {
  return fetch(
    `http://localhost:8080/api/movies/movie/${id}/reviews`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Upcoming Movies
export const getUpcomingMovies = async () => {
  return fetch(
    `http://localhost:8080/api/movies/upcoming`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Top Rated Movies
export const getTopRatedMovies = async () => {
  return fetch(
    `http://localhost:8080/api/movies/top-rated`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Popular Movies
export const getPopular = async () => {
  return fetch(
    `http://localhost:8080/api/movies/popular`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Recommended Movies
export const getRecommended = async (id) => {
  return fetch(
    `http://localhost:8080/api/movies/${id}/recommendations`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Currently Showing Movies
export const getCurrentlyShowing = async () => {
  return fetch(
    `http://localhost:8080/api/movies/now-playing`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//Get Favourites
export const getFavourites = async () => {
  return fetch('http://localhost:8080/api/movies/favourites')
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Failed to fetch favourites");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

//Logins and signups
export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};







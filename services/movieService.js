const axios = require('axios');
require('dotenv').config();
const TMDB_API_KEY = process.env.ACCESS_TOKEN;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_MOVIE_CREDITS_URL = `${TMDB_BASE_URL}/movie`;

const getActors = async (movieId) => {
  try {
    const response = await axios.get(`${TMDB_MOVIE_CREDITS_URL}/${movieId}/credits`, {
      headers: {
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
    });
    return response.data.cast
      .filter((actor) => actor.known_for_department === 'Acting')
      .map((actor) => actor.name)
      .join(', ');
  } catch (error) {
    throw new Error('Error fetching actors');
  }
};

const searchMovie = async (query) => {
  try {
    const TMDB_SEARCH_MOVIE_URL = `${TMDB_BASE_URL}/search/movie?query=${query}`;
    const response = await axios.get(TMDB_SEARCH_MOVIE_URL, {
      headers: {
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
    });

    const movie=response.data.results.filter(movie => movie.original_title === query);
    if(!movie || movie.length === 0) throw new Error('no movie found');

    const requiredMovie=movie[0];
    const actors = await getActors(requiredMovie.id);

    return {
        title: requiredMovie.title,
        tmdbId: requiredMovie.id,
        genre: requiredMovie.genre_ids.join(', '),
        actors: actors,
        releaseYear: requiredMovie.release_date ? requiredMovie.release_date.split('-')[0] : 'N/A',
        rating: requiredMovie.vote_average,
        description: requiredMovie.overview,
    };

  } catch (error) {
    throw new Error('Error fetching movies'+error);
  }
};

module.exports = {
  searchMovie
};

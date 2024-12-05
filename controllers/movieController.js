const { searchMovie } = require('../services/movieService');

const searchMovies = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "query" is required.' });
  }

  try {
    const movies = await searchMovie(query);
    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while fetching movies.' });
  }
};

module.exports = {
  searchMovies,
};

const express = require('express');
const { searchMovies } = require('../controllers/movieController');
const router = express.Router();

router.get('/search', searchMovies);

module.exports = router;

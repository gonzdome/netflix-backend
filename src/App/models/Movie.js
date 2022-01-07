const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  title: String,
  type: String,
  cover: String,
  logo: String,
  thumb: String,
  description: String,
  genre: Array,
  cast: Array,
  scene_moments: Array,
});

module.exports = Movie;

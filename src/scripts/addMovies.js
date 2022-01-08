require('../database');

const Movie = require('../App/models/Movie');
const movieJSON = require('../data/movie.json');

const addMovies = async () => {
  try {
    const movies = movieJSON.map((movie) => new Movie(movie).save());
    return movies;
  } catch (err) {
    return console.log({ message: err.message });
  }
};

addMovies();

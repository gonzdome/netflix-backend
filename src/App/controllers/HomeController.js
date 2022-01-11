const _ = require('underscore');
const Movie = require('../models/Movie');
const Season = require('../models/Season');

class HomeController {
  async index(req, res) {
    try {
      // recovering movies
      const Movies = await Movie.find();
      let finalMovies = [];

      // recovering seasons
      for (const movie of Movies) {
        const seasons = await Season.find({ movie_id: movie._id });
        const newMovie = { ...movie._doc, seasons };
        finalMovies.push(newMovie);
      }
      // shuffle results
      finalMovies = _.shuffle(finalMovies);

      // main movie
      let mainMovie = finalMovies[0];

      // separate in sections
      let sections = _.chunk(finalMovies, 5);
      return res.json({ error: false, mainMovie, sections });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

module.exports = new HomeController();

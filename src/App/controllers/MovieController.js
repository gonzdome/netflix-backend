const Movie = require('../models/Movie');
const Season = require('../models/Season');

class MovieController {
  async store(req, res) {
    try {
      const movie = req.body;
      const response = await new Movie(movie).save();
      return res.json({ error: false, message: response });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }

  async index(req, res) {
    try {
      const movie_list = await Movie.find({
        attributes: ['id', 'title', 'actors', 'year', 'details', 'awards'],
      });
      return res.json({ error: false, movie_list });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }

  async home(req, res) {
    try {
      const movies = await Movie.find({});
      const finalMovies = [];
      for (const movie of movies) {
        const season = await Season.find({
          movie_id: movie._id,
        });
        const newMovie = { ...movie._doc, season };

        finalMovies.push(newMovie);
      }
      return res.json();
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }

  async catch(req, res) {
    try {
      const { id } = req.params;
      const single_movie = await Movie.findById(id);
      return res.json({ error: false, single_movie });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const movie = req.body;
      const movieUpdate = await Movie.findByIdAndUpdate(id, movie);
      return res.json({ error: false, movieUpdate });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Movie.findByIdAndDelete(id);
      return res.json({ message: 'Movie deleted!' });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

module.exports = new MovieController();

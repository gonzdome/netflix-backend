const Movie = require('../models/Movie');

class MovieController {
  async store(req, res) {
    try {
      const movie = req.body;
      const response = await new Movie(movie).save();
      res.json({ error: false, message: response });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  }

  async index(req, res) {
    const movie_list = await Movie.find({
      attributes: ['id', 'title', 'actors', 'year', 'details', 'awards'],
    });
    return res.json(movie_list);
  }
}

module.exports = new MovieController();

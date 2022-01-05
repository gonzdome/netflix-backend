const Movie = require('../models/Movie');

class MovieController {
  async store(req, res) {
    try {
      const movie = req.body;
      console.log(movie);
      const response = await new Movie(movie).save();
      res.json({ error: false, message: response });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  }
}

module.exports = new MovieController();

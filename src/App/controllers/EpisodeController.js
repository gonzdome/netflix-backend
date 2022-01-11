const Episode = require('../models/Episode');

class EpisodeController {
  async index(req, res) {
    try {
      const season_id = req.params.season;
      const episodes = await Episode.find({ season_id });
      return res.json({ error: false, message: episodes });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

module.exports = new EpisodeController();

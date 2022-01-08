require('../database');

const Movie = require('../App/models/Movie');
// const Season = require('../App/models/Season');
// const Episode = require('../App/models/Episode');

const addSeasonEpisodes = async () => {
  try {
    const movies = await Movie.find({ type: 'Series' }).select('_id');

    for (const series of movies) {
      console.log(`SÉRIE: ${series}-----------------------------`);
    }

    console.log(movies);
    return movies;
  } catch (err) {
    return console.log({ message: err.message });
  }
};

addSeasonEpisodes();

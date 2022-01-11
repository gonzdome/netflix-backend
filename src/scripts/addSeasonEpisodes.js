require('../database');

const Movie = require('../App/models/Movie');
const Season = require('../App/models/Season');
const Episode = require('../App/models/Episode');

const addSeasonEpisodes = async () => {
  try {
    const series = await Movie.find({ type: 'Series' }).select('_id');

    for (const serie of series) {
      console.log(`SÉRIE: ${serie}-----------------------------`);
      const numSeason = Math.floor(Math.random() * 5) + 1;
      for (let i = 1; i <= numSeason; i += 1) {
        console.log(`New season, ${i} of ${numSeason}`);
        const season = await new Season({
          movie_id: serie,
          title: `Season ${i}`,
        }).save();

        const numEpisodes = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= numEpisodes; x += 1) {
          console.log(`New episode, ${x} of ${numSeason}`);
          await new Episode({
            season_id: season._id,
            title: `Episode ${x}`,
            number: x,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta tortor vitae tortor varius, in ullamcorper lorem bibendum. Morbi nec.`,
            cover: 'https://picsum.photos/300/200',
          }).save();
        }
      }
    }
    console.log('End of Script');
    return series;
  } catch (err) {
    return console.log({ message: err.message });
  }
};

addSeasonEpisodes();

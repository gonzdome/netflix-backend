const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  title: {
    type: String,
    required: true,
  },
  actors: Array,
  year: Number,
  details: Object,
  awards: [Object],
});

module.exports = Movie;

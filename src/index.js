const express = require('express');
const cors = require('cors');
// morgan send info of the requisitions to the log
const morgan = require('morgan');
// search the express in the node_modules
const movieRoutes = require('./routes/movie.routes');
const userRoutes = require('./routes/user.routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use('/movie', movieRoutes);
    this.server.use('/user', userRoutes);
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
    // set the morgan dependency to only work in dev-mode
  }
}

module.exports = new App().server;

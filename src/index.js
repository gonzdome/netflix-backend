const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// search the express in the node_modules
const routes = require('./routes/movie.routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use('/', routes);
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
    // set the morgan dependency to only work in dev-mode
  }
}

module.exports = new App().server;

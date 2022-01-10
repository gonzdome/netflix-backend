const express = require('express');
const cors = require('cors');
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
  }
}

module.exports = new App().server;

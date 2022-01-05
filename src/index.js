const express = require('express');
// search the express in the node_modules
const bodyParser = require('body-parser');
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
  }
}

module.exports = new App().server;

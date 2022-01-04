const express = require('express');
// search the express in the node_modules
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    // calls the express, executes/instances and put it inside a const named app
    this.routes();
    this.middlewares();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    this.server.use(express.json());
  }
}

module.exports = new App().server;

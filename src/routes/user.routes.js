const { Router } = require('express');

const UserController = require('../App/controllers/UserController');

const routes = new Router();

routes.post('/', UserController.store);

module.exports = routes;

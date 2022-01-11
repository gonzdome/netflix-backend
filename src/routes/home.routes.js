const { Router } = require('express');

const HomeController = require('../App/controllers/HomeController');

const routes = new Router();

routes.get('/', HomeController.index);
// endpoint to get all registrations

module.exports = routes;

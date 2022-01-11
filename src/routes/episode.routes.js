const { Router } = require('express');

const EpisodeController = require('../App/controllers/EpisodeController');

const routes = new Router();

routes.get('/:season/episodes', EpisodeController.index);
// endpoint to get all registrations

module.exports = routes;

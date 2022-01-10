const { Router } = require('express');

const MovieController = require('../App/controllers/MovieController');

const movieRoutes = new Router();

movieRoutes.get('/', MovieController.index);
// endpoint to get all registrations

movieRoutes.get('/:id', MovieController.catch);
// endpoint to get a single register using the ID as a parameter

movieRoutes.post('/', MovieController.store);
// endpoint to create new register

movieRoutes.put('/:id', MovieController.update);
// endpoint to update a register

movieRoutes.delete('/:id', MovieController.delete);

module.exports = movieRoutes;
// export routes

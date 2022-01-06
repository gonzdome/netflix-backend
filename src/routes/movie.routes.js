const morgan = require('morgan');
// dependency to watch requisitions and send info to the log
const { Router } = require('express');

const MovieController = require('../App/controllers/MovieController');

const routes = new Router();

routes.use(morgan('dev'));
// set the morgan dependency to only work in dev-mode

routes.get('/', MovieController.index);
// endpoint to get all registrations

routes.get('/:id', MovieController.catch);
// endpoint to get a single register using the ID as a parameter

routes.post('/', MovieController.store);
// endpoint to create new register

routes.put('/:id', MovieController.update);
// endpoint to update a register

routes.delete('/:id', MovieController.delete);

module.exports = routes;
// export routes

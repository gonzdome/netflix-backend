const morgan = require('morgan');
// dependency to watch requisitions and send info to the log
const { Router } = require('express');

// const MovieController = require('../App/controllers/MovieController');
const MovieController = require('../App/controllers/MovieController');

const routes = new Router();

routes.use(morgan('dev'));
// set the morgan dependency to only work in dev-mode

routes.get('/', (req, res) => {
  res.json({ mensagem: 'Mostrar todos os registros' });
});
// endpoint to get all registrations

routes.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensagem: `Mostrar apenas o registro de ID: '${id}'` });
});
// endpoint to get a single register using the ID as a parameter

routes.post('/', MovieController.store);
// endpoint to create new register

routes.put('/:id', (req, res) => {
  const id = req.params;
  res.json({ mensagem: `Atualizar somente o registo de ID: ${id}` });
});
// endpoint to update a register

routes.delete('/:id', (req, res) => {
  const id = req.params;
  res.json({ mensagem: `Deletar somente o registo de ID: ${id}` });
});

module.exports = routes;
// export routes

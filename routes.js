const morgan = require('morgan');
const { Router } = require('express');
// requision monitoring dependency

const routes = new Router();

routes.use(morgan('dev'));
// set the morgan dependency to only work in dev-mode

routes.get('/', (req, res) => {
  res.json();
});
// endpoint to get all registrations

routes.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensagem: `Mostrar apenas o registro de ID: '${id}'` });
});
// endpoint to get a single registration using the ID as a parameter
module.exports = routes;

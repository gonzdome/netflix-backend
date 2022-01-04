const express = require('express');
// search the express in the node_modules

const app = express();
// calls the express, executes/instances and put it inside a const named app

const morgan = require('morgan');
// requision monitoring dependency

app.use(morgan('dev'));

app.get('/teste', (req, res) => {
  res.json();
});
// test endpoint

app.listen(3000, () => {
  console.log('Server on!');
});
// server connection to the port: 3000

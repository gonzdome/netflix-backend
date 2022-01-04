const express = require('express');
// busca o express em node_modules
const app = express();
// chamando a const express e executando/instanciando e guardando a const app

app.get('/teste', (req, res) => {
  // regra de negócio
  res.json();
});

app.listen(3000, () => {
  console.log('Server on!');
});

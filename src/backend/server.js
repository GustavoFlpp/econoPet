const express = require('express');
const rotaPetshop = require('caminho/para/arquivo');

const app = express();

// porta definida para o servidor
const port = 3000;

// middleware para permitir requisições de qualquer origem
app.use('/petshops', rotaPetshop);

// servidor escutando na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

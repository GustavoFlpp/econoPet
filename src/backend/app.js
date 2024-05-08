const express = require('express');
const rotasPetshop = require('./rotas');

const app = express();

app.use(express.json());

// Exemplo de rota
app.use('/exemplo', rotasPetshop);

module.exports = app;

const express = require('express');

// Importação do controller
const { calculateBestOption } = require('../controllers/petshopController');

// Criação de uma nova rota
const router = express.Router();

// Exemplo de rota
router.post('/sua-rota-aqui', calculateBestOption);

// Exportação da rota
module.exports = router;

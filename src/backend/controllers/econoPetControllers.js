const obterMelhorPetshop = require('../services/petshopService');

// Função que calcula a melhor opção de petshop
const calcularMelhorOpcao = (req, res) => {
  const { data, cachorrosPequenos, cachorrosGrandes } = req.body;
  const resultado = obterMelhorPetshop(
    data,
    parseInt(cachorrosPequenos),
    parseInt(cachorrosGrandes)
  );
  // Retorna o resultado em formato JSON
  res.json(resultado);
};

// Exporta as funções para serem utilizadas em outros arquivos
module.exports = {
  calcularMelhorOpcao,
};

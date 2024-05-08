import '../App.css';
import { useState } from 'react';
import axios from 'axios';

function EconoPetForm() {
  // Criando as variáveis de estado
  const [data, setData] = useState('');
  const [cachorrosPequenos, setCachorrosPequenos] = useState(0);
  const [cachorrosGrandes, setCachorrosGrandes] = useState(0);
  const [resultado, setResultado] = useState(null);

  // Lidando com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fazer uma requisição POST para o servidor
      const response = await axios.post(
        {
          /* na teoria aqui era para ser o JSON com os três petshops estáticos*/
        },
        {
          data,
          cachorrosPequenos,
          cachorrosGrandes,
        }
      );
      // Atualizar o estado do resultado com os dados da resposta
      setResultado(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
      // Definir uma mensagem de erro no estado do resultado se houver um erro
      setResultado({ error: 'Falha ao buscar dados' });
    }
  };

  return (
    <div>
      <h1>Encontre o Melhor Petshop</h1>
      <form onSubmit={handleSubmit}>
        {/* Entrada para selecionar a data */}
        <input
          type='date'
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        {/* Entrada para inserir o número de cachorros pequenos */}
        <input
          type='number'
          value={cachorrosPequenos}
          onChange={(e) => setCachorrosPequenos(e.target.value)}
          required
          min='0'
        />
        {/* Entrada para inserir o número de cachorros grandes */}
        <input
          type='number'
          value={cachorrosGrandes}
          onChange={(e) => setCachorrosGrandes(e.target.value)}
          required
          min='0'
        />
        {/* Botão de envio */}
        <button type='submit'>Calcular</button>
      </form>
      {/* Exibir o resultado, se disponível */}
      {resultado && (
        <div>
          <h2>Resultados:</h2>
          <p>
            {/* Exibir o resultado ou mensagem de erro */}
            {resultado.error ||
              `Melhor Petshop: ${resultado.nome} com custo total: R$${resultado.custo}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default EconoPetForm;

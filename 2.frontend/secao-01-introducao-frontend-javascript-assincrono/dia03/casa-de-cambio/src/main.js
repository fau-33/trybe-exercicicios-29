import { renderCoins } from './components';
import { fectchRates } from './services/exchange';
import './style.css';

const searchBtn = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');

renderCoins(fakeCoins, 'BRL');

function handleSearch() {
  const searchedCoin = coinInput.value;

  // Buscando a moeda pesquisada pelo usuário
  fectchRates(searchedCoin)
    .then((dados) => {
      // Reagindo a resposta do API
      const { rates, base } = dados;
      // Tranforma o objeto em array de [[chave, valor]]
      const ratesArray = Object.entries(rates);

      // Transformando o array em um array de formato [{ name: 'USD', value: 5.280 }]
      const ratesArrayObject = ratesArray.map((rate) => (
        { name: rate[0], value: rate[1] }
      ));
      renderCoins(ratesArrayObject, base);
    });
}

searchBtn.addEventListener('click', handleSearch);

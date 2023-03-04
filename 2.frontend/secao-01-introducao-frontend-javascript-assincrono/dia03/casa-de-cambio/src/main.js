import Swal from 'sweetalert2';
import { renderCoins } from './components';
import { fectchRates } from './services/exchange';
import './style.css';

const searchBtn = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');

function handleSearch() {
  const searchedCoin = coinInput.value;

  if (!searchedCoin) {
    Swal.fire({
      title: 'Error!',
      text: 'Você precisa digita uma moeda',
      icon: 'error',
    });
    return;
  }

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
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
      });
    });
}

searchBtn.addEventListener('click', handleSearch);

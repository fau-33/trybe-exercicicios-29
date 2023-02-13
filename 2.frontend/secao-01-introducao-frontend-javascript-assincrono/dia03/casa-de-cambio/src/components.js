/* <h2 class="coins-title">Valores referentes a 1 USD</h2>
      <ul class="coins">
        <li class="coin">ASD <span>3.251</span></li>
        <li class="coin">ASD <span>3.251</span></li>
        <li class="coin">ASD <span>3.251</span></li>
      </ul>
*/
const coinsTitle = document.querySelector('.coins-title');
const coinsListElement = document.querySelector('.coins');

// função criou o <li/>
export function createCoinElement(name, value) {
  // <li class="coin">ASD <span>3.251</span></li>
  const coinElement = document.createElement('li');
  coinElement.classList.add('coin');
  coinElement.innerHTML = `${name} <span>${value}</span>`;
  return coinElement;
}
// Coins precisa de um array [{ name: "USD", value: 5.280 }]
export function renderCoins(coins, baseCoin) {
  // <h2 class="coins-title">Valores referentes a 1 USD</h2>
  coinsTitle.innerHTML = `Valores referentes a ${baseCoin}`;
  coinsListElement.innerHTML = '';// estou limpando a <ul/>
  // <ul> <li...
  coins.forEach((coin) => {
    const cointElement = createCoinElement(coin.name, coin.value);// criou a <li/>
    coinsListElement.appendChild(cointElement);
  });
}

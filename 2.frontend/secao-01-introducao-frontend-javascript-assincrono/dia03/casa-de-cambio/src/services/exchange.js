export function fectchRates(searchedCoin) {
  return fetch(`https://api.exchangerate.host/latest?base=${searchedCoin}`)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.base !== searchedCoin) {
        throw new Error('Moeda não existe');
      }
      return dados;
    });
}

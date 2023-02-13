export function fectchRates(searchedCoin) {
  return fetch(`https://api.exchangerate.host/latest?base=${searchedCoin}`)
    .then((response) => response.json());
}

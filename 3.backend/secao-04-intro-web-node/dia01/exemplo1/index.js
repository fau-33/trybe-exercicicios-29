//const convert = require('./brlValue');
const { brl, usdToBrl } = require('./brlValue');

//console.log(brlValue);

console.log(`O Valor do dólar: ${brl}`);
console.log(`10 dólares em reais: ${usdToBrl(10)}`);

/* const usd = 10;
const brl = convert(usd);

console.log(brl); */
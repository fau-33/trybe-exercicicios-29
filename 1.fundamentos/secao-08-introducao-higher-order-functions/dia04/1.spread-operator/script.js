// Spread Operator

const items = ['Camiseta', 'Carregador', 'Chinelo'];
items.push('Meia');

//console.log(items); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia']

// Utilizando spread em arrays
/* A sintaxe do spread para utilizar em arrays é composta por:

uma variável, que vai salvar o novo array;
os colchetes, que caracterizam que é um array;
os três pontos ..., que caracterizam que uma informação está sendo espalhada. Nesse caso, o array original;
o elemento a ser adicionado.
Observe como fica a sintaxe do spread em arrays: */

//const variavel = [...arrayOriginal, itemParaAdicionar];

// array original
const items1 = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items1, 'Meia'];
//console.log(items1);
//console.log(newItems);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
//console.log(months);

// Utilizando spread em objetos

/* const product = {
  id: 1,
  name: 'Camiseta',
};

const newProduct = { ...product, price: 23 };

console.log(newProduct); */

const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
};

const newProduct1 = {...product, ...productPrice};
//console.log(newProduct1);

//console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
//console.log(Math.max(...randomNumbers)); // 800
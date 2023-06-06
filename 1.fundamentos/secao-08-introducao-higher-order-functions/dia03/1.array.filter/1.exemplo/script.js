// Array.filter => O filter é uma função responsável por realizar algum tipo de filtro no array, de acordo com uma condição.

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

 const dadosString =  dados.filter((item) => typeof item === 'string');
 const dadosNumber =  dados.filter((item) => typeof item !== 'string');

 //console.log(dadosNumber);

 const listaNumeros = [10, 20, 30, 40];

 const maiorVinte = listaNumeros.filter((item) => item > 20);
 //console.log(maiorVinte);
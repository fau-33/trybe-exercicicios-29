// 🚀 Há um par entre nós
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.
const numero1 = 1;
const numero2 = 2;
const numero3 = 5;

let numeroBollean = false;

if ((numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0)) {
  numeroBollean = true;
} else {
  numeroBollean = false;
}

//console.log(numeroBollean);

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number1 = 1;
const number2 = 2;
const number3 = 4;

let numeroEven = false;

if ((numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0)) {
  numeroEven = true;
} else {
  numeroEven = false;
}

//console.log(numeroEven);

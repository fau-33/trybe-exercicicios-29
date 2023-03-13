// 🚀 Lidando com Arrays
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let numeroImpar = 0;
let maiorNumero = numbers[0];
let menorNumero = numbers[0];
// 1.Percorra o array imprimindo todos os valores nele contidos com a função console.log();
/* for (let number of numbers) {
  console.log(number);
} */

/* for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

// 2.Some todos os valores contidos no array e imprima o resultado;
/* for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
 *///console.log(sum);

// 3.Calcule e imprima a média aritmética dos valores contidos no array;

//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let media = sum / numbers.length;
//console.log(media);

// 4.Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  message = "valor maior que 20";
} else {
  message = "valor menor ou igual a 20";
}

//console.log(message);

// 5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
//console.log(maiorNumero);

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numeroImpar += 1;
  }
}

/* if (numeroImpar === 0) {
  console.log('Nenhum valor encontrado!');
} else {
  console.log(numeroImpar);
} */

// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

//console.log(menorNumero);

// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayNumeros = [];

for (let index = 1; index <= 25; index += 1) {
  arrayNumeros.push(index);
}

//console.log(ArrayNumeros);

// 9.Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 1; index <= 25; index += 1) {
  arrayNumeros.push(arrayNumeros[index] / 2);
}

console.log(arrayNumeros);




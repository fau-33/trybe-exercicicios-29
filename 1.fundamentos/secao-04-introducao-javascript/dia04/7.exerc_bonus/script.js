// Exercícios - bônus

// Exercício 1

//(Bônus) 1.Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

/* | I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
 */

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];

  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}



console.log(romanoParaDecimal('MMXVIII'));
console.log(romanoParaDecimal('VI'));

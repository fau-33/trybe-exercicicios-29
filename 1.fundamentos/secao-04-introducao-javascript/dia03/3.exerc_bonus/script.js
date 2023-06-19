// Exercícios - bônus

// 1.Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

/* let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine += symbol;
} */

/* for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
} */

// 2.Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let size = 5;
let symbol1 = '*';
let inputLine1 = '';

/* for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  inputLine1 += symbol1;
  console.log(inputLine1);
}
 */
// 3.Agora inverta o lado do triângulo.

/* let n1 = 5;
let symbol2 = '*';
let inputLine2 = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine2 += '';
    } else {
      inputLine2 += symbol2;
    }
  }
  console.log(inputLine2);
  inputLine2 = '';
  inputPosition -= 1;
} */

// Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

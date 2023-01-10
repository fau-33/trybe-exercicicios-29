// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
/* Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

//const a = 1000;
//const b = 100;

/* console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a * b);
console.log(a % b); */

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
//const numero1 = 100;
//const numero2 = 200;

/* if (numero1 > numero2) {
  console.log("O " + numero1 + " é o maior");
}else {
  console.log("O " + numero2 + " é o maior");
} */

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
//const number1 = 10;
//const number2 = 900;
//const number3 = 10000;

/* if (number1 > number2 && number1 > number3) {
  console.log("O " + number1 + " é o maior");
} else if(number2 > number1 && number2 > number3) {
  console.log("O " + number2 + " é o maior");
} else if(number3 > number1 && number3 > number2) {
  console.log("O " + number3 + " é o maior");
} */

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/* const number = 22;

if (number > 0) {
  console.log("Positivo");
} else if (number < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
 */

// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.
/* const angulo1 = 100;
const angulo2 = 50;
const angulo3 = 30;
const totalAngulos = angulo1 + angulo2 + angulo3;
const totalAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (totalAngulosPositivos) {
  if (totalAngulos === 180) {
    console.log("True");
  } else {
    console.log("False");
  }
} else {
  console.log("Erro: ângulo inválido!");
} */


// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)

/* const pecaTabuleiro = "torre";

switch (pecaTabuleiro.toLowerCase()) {
  case 'rei':
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case 'bispo':
    console.log("Bispo-> Diagonal.");
    break;
  case 'rainha':
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
  case 'cavalo':
    console.log("Cavalo -> 'L' pode pular sobre as peças.");
    break;
  case 'torre':
    console.log("Torre -> Horizontal e vertical.");
    break;
  case 'peao':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log("Peça inválida!");
    break;    
} */

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
/* Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 80;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota <= 50) {
  console.log("F");
}

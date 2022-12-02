// função => é um conjunto de instruções que executa uma tarefa ou calcula um valor.


// Sem função
let nome = 'João';

//console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  //console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
  return 'Bom dia!';
}

//console.log(bomDia()); // Bom dia!

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

//console.log(status); // deslogado

logarDeslogar();
//console.log(status); // logado

logarDeslogar();
//console.log(status); // deslogado

//console.log('O usuário está ' + status); // O usuário está deslogado

// E agora, exemplos de funções usando parâmetros:

// Com função
function soma(a, b) {
  return a + b;
}

//console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

//console.log(maiorNum(10, 20)); // 20 é maior que 10
//console.log(maiorNum(2, -5)); // 2 é maior que -5
//console.log(maiorNum(1, 1)); // Os números são iguais

// Exercicio de fixação sobre funções

// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

/* console.log(adicao(100, 20));
console.log(subtracao(100, 20));
console.log(divisao(100, 20));
console.log(modulo(100, 20)); */

// 2.Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1 + ' é o maior numero que ' + num2;
  } else if (num2 > num1) {
    return num2 + ' é o maior numero que ' + num1;
  }
}

console.log(maiorNumero(20, 5));
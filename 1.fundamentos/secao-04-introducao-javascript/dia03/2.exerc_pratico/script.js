// 1.crie um algoritmo que imprima na tela o fatorial de 10.
// O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

//console.log(fatorial);

// 2.Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reserveWord = '';

for (let index = 0; index < word.length; index += 1) {
  reserveWord += word[word.length - 1 - index]; 
}

//console.log(reserveWord);

// 3.Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

// 3.1- Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

for (let index = 0; index < array.length; index += 1) {  
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

//console.log("A maior palavra " + maiorPalavra);
//console.log("A menor palavra " + menorPalavra);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;

  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    maiorNumeroPrimo = currentNumber;
  }
}

console.log(maiorNumeroPrimo);
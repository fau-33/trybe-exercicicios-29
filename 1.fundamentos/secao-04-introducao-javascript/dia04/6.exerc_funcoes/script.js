// 🚀 Exercícios - funções

// 1.Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

//Exemplo de palíndromo: arara
//verificaPalindrome('arara')
//Retorno esperado: true
//verificaPalindrome('desenvolvimento')
//Retorno esperado: false

function verificaPalindrome(word) {

  let reverse = word.split('').reverse( ).join('');

  if(reverse === word) {
    return true;
  } else {
    return false;
  }
  /* for(let index in word) {
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true; */
  return reverse;
}

/* console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento')); */

// 2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function indiceDoMaior(numeros) {
  let indiceMaior = 0;

  for(let indice in numeros) {
    if(numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

//console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// 3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function indiceDoMenor(numeros) {
  let indiceMenor = 0;

  for(let indice in numeros) {
    if(numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

//console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// 4.Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

function maiorPalavra(palavras) {
  let maiorNome = palavras[0];
  for(let indice in palavras) {
    if(maiorNome.length < palavras[indice].length) {
      maiorNome = palavras[indice];
    }
  }
  return maiorNome;
}

//console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5.Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for(let index in numeros) {
    let verificaNumero = numeros[index];
    for(let index2 in numeros) {
      if(verificaNumero === numeros[index2]) {
        contNumero += 1;
      }

      if(contNumero > contRepetido) {  
        contRepetido = conNumero;
        indexNumeroRepetido = index;
      }
      conNumero = 0;
    }
  }
  return numeros[indexNumeroRepetido];
}

//console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6.Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somaDeTodosOsNumeros(numero) {
  let total = 0;

  for (let index = 1; index <= numero; index += 1) {
    total += index;    
  }
  return total;
}

//console.log(somaDeTodosOsNumeros(5));
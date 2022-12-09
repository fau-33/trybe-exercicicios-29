// Exercícios - mais prática
// Parte II
//Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// 1.Crie uma função que ligue e desligue um motor de um carro.
// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
//Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.
let statusMotor = 'ligado';

const ligarDesligar = () => statusMotor === 'ligado'? 'O motor está ligado': 'O motor está ligado';

/* if (statusMotor === 'ligado') {
  console.log( "O motor está ligado");
} else {
  console.log( "O motor está desligado");
} */
//console.log(ligarDesligar());

// 🚀 2.Crie uma função que calcule a área de um círculo

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

const circleArea = (raio) => {
  const PI = 3.14;

  let area = PI * raio * raio;

  //console.log( `Essa é a área do círculo: ${area}`);
  
};

circleArea(3);

// 🚀 3.Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
//longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (text) => {
  // Transforma uma string em um array com split
  const wordArray = text.split(' ');
  // Variável para armazenar a maior palavra
  let maxLength = 0;
  // Variável para guardar a palavra de palavra maior
  let result = '';
  
  for (const word of wordArray) {
    if(word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
};


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
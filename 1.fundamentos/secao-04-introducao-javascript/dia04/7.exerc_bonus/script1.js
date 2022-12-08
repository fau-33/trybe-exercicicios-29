// Exercício 2

//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

//Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  const result = [];

  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];

    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];

      if ((current % 2) === 0) {
        result.push(current);
      }
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));
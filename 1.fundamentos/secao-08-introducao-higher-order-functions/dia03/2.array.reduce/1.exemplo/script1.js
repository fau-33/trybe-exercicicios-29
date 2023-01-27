const numbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

//console.log(totalSum); //112

const numbers1 = [50, 85, -30, 3, 15];

const maiorVinte = numbers1.reduce((bigger, number) => bigger > number ? bigger:number);

//console.log(maiorVinte);
// faça uma função que some todos os números pares do array numbers:

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// usando filter e reduce
const isEven = (number) => number % 2 === 0;
const sum = (accumulador, number) => accumulador + number;

const sumNumbers1 = (array) => array.filter(isEven).reduce(sum);

//console.log(sumNumbers1(numbers3));

// usando o reduce

const sum1 = (accumulador, number) => {
  (number % 2 === 0)? accumulador + number: accumulador;
}

const sumNumbers2 = (array) => array.reduce(sum, 0);

//console.log(sumNumbers2(numbers3));






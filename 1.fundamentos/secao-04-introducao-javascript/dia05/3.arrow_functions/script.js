// arrow functions

/* function printName() {
  const myName = 'Lucas';
  return myName;
};
 */
//console.log(printName());

// Também é possível declarar funções e atribuí-las a variáveis, como no exemplo abaixo, em que a função printName é atribuída a uma variável:

/* const printName = function () {
  const myName = 'Lucas';
  return myName;
}; */

//console.log(printName());

const printName = () => 'Lucas';
//console.log(printName());

const multiplyByTwo = number => number * 2;
//console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
//console.log(multiplication(8, 2));
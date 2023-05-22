// Array Destructuring

const user = {
  name: 'Marlete',
  age: 60
};

// desestruturamos a propriedade name e atribuímos como variável
const { name } = user;

// conseguimos utilizar a propriedade como variável
//console.log(name); // Marlete

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

/* const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];
 */
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

//console.log(firstCountry); // Brazil
//console.log(secondCountry); // Japan
//console.log(thirdCountry); // China
//console.log(fourthCountry); // Canada

//Para Fixar
// roduza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  return a + b;
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstPrime, SecondPrime, ThirdPrime] = primeNumbers;

//console.log(sum(firstPrime, ThirdPrime));

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro 

[comida, animal, bebida] = [bebida, comida, animal];
//console.log(comida, animal, comida);

// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
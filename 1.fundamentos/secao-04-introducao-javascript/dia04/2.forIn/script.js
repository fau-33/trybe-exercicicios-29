// forIn => percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

let cars = ['Saab', 'Volvo', 'BMW'];

 for (let index in cars) {
  console.log(index, cars[index]);
} 

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
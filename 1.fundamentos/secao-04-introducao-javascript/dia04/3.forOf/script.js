// forOf => Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

/* let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
}; */
//resultado: hamburguer, bife, acarajé;

// Para fixar

// 1.Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

/* for (let key in names) {
  console.log('Olá, ' + names[key] + '!');
} */

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let position in car) {
  console.log(position, car[position]);
}

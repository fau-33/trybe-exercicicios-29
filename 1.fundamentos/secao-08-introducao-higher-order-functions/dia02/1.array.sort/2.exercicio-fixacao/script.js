const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((pessoasA, pessoasB) => pessoasA.age - pessoasB.age);
people.sort((pessoasA, pessoasB) => pessoasB.age - pessoasA.age);

//console.log(people);
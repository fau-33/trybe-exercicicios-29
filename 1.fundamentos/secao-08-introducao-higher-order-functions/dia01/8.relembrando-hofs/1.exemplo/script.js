const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// MOstre no console o nome das pessoas do array de pessoas

 //pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
 
 // Encontre a primeira pessoa chamada 'Aline'

const verificaNome = pessoas.find((pessoa) => pessoa.nome === 'Aline');
//console.log(verificaNome);

// Verifique se alguma pessoa tem mais de 30 anos

const verificaIdadeMaior30 = pessoas.some((pessoa) => pessoa.idade > 30);
//console.log(verificaIdadeMaior30);

// Verifique se todas as pessoas tem mais de 30 anos

const verificaTodosMaisDe30 = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(verificaTodosMaisDe30);
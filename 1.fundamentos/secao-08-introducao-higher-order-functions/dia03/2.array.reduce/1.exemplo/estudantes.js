// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

/* [
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
] */

const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc: materia;

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name,
}));

//.log(reportBest(estudantes));

// Relembrando as Hofs

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// forEach => retorna => não tem retorno / espera => não espera retorno
// Mostre no console o nome das pessoas do array de pessoas

const displayPersons = pessoas.forEach((pessoa) => pessoa.nome);
//console.log(displayPersons);

// 1.find => retorna => um único elemento(primeiro que satisfaz o elemento ou undefined) / espera => boolean(true/false) pode ser em formato de condição
// encontre a primeira pessoa com nome 'Aline

const findName = pessoas.find((pessoa) => pessoa.nome === 'Aline');
//console.log(findName);

// 2.some => retorna: boolean(true/false) algum elemento que satisfaz? / espera => boolean(true/false) pode ser em formato de condição
// verifique se alguma pessoa tem mais de 30 anos

const pessoasMais30 = pessoas.some((pessoa) => pessoa.idade > 30);
//console.log(pessoasMais30);

// 3.every => retorna: retorna: boolean(true/false) algum elemento que satisfaz? / espera => boolean(true/false) pode ser em formato de condição
// verifique se todas as pessoas tem mais de 30 anos

const pessoasMaisDe30Anos = pessoas.every((pessoa) => pessoa.idade > 30);
//console.log(pessoasMaisDe30Anos);

// 4.sort => retorna: array de elementos ordenados / espera => novo elemento
// ordene o array de pessoas da pessoa mais nova para a mais velha

const ordemPessoas = pessoas.sort((pessoaA, pessoaB) => pessoaA.idade - pessoaB.idade);
//console.log(ordemPessoas);

// 5.map => retorna: array de elementos ordenados(retornos da callback) / espera => novo elemento
// crie um novo array contendo o nome de cada pessoa

const novoArrayPessoas = pessoas.map((pessoa) => pessoa.nome);
//console.log(novoArrayPessoas);

// 6.filter => array de elementos (todos que satisfazem a condição) / espera => boolean(true/false) pode ser em formato de condição
// encontre todas a pessoas que tem mais de 30 anos

const personsMore30 = pessoas.filter((pessoa) => pessoa.idade > 30);
//console.log(personsMore30);

// 7.reduce => o que quiser (depende do retorno o callback) / o que quiser (acumulando os retornos)
// some a idade de todas as pessoas

const sumAgesPersons = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
//console.log(sumAgesPersons);






// Object Destructuring

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

//console.log(product.name);

//const { name, seller } = product;
//console.log(name); // Smart TV Crystal UHD
//console.log(seller); // Casa de Minas

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturação de objetos
const { name, age, homeWorld: { name: planetName}, description: {jedi}} = character;

// imprimindo os valores
const displayValues = `Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e por incrivel que possa parecer, ele ${jedi ? 'é um jedi': 'não é um Jedi'}. `;
//console.log(displayValues);


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
//console.log(workDays);
//console.log(weekend);

const weekDays = [...workDays, ...weekend];
//console.log(weekDays);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject } = student;

//console.log(nome);
//console.log(classAssigned);
//console.log(subject);

const product2 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product2); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

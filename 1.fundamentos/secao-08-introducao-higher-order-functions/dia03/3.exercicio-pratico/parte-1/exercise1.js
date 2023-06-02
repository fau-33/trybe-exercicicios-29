// Exercícios - agora, a prática
// 🚀 Organizando biblioteca

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

/* const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
 */

const fantasyOrScienceFiction = () => {
  return books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia';
  })
}

//console.log(fantasyOrScienceFiction());

// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

/* const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
 */

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => (currentYear - book.releaseYear) >= 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

//console.log(oldBooksOrdered());

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

//const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => {
  return books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);
}
const result = booksByAuthorBirthYear(1920);
//console.log(result);

// 🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

/* const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
 */

const fantasyOrScienceFictionAuthors = () => {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
  .filter((book) => wantedGenres.includes(book.genre))
  .map((book) => book.author.name)
  .sort();
}

//console.log(fantasyOrScienceFictionAuthors());

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

/* const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
 */

const oldBooks = () => {
  const currentYear = new Date().getFullYear();

  return books
  .filter((book) => (currentYear - book.releaseYear) >= 60)
  .map((book) => book.name)
}

//console.log(oldBooks());

// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

//const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3 
  )).name;
}

//console.log(authorWith3DotsOnName());
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificaNumeros = numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0);

//console.log(verificaNumeros);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verificaNomeCom5 = names.find((name) => name.length === 5);
//console.log(verificaNomeCom5);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const encontrarMusicaId = musicas.find((musicaId) => musicaId.id === '31031685');

//console.log(encontrarMusicaId);


const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

for(let index = 0; index < pessoasAprovadas.length; index += 1) {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada nome e transforma em maiúsculo
}

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']
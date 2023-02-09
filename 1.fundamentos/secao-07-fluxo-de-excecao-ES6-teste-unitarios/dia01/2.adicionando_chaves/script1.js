pessoaEstudante = {

}

let newKey = 'nome';
const nome = 'Flávio';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
}

adicionaPropriedade(pessoaEstudante, newKey, nome);
//console.log(pessoaEstudante);

let newKey1 = 'email';
const email = 'fau_felix30@hotmail.com';

adicionaPropriedade(pessoaEstudante, newKey1, email);
//console.log(pessoaEstudante);

let newKey2 = 'telefone';
const telefone = '(71)992068034';

adicionaPropriedade(pessoaEstudante, newKey2, telefone);
console.log(pessoaEstudante);





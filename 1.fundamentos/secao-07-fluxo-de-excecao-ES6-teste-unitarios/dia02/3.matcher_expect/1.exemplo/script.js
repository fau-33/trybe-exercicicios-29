// Expect e matchers

// toBe
//Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Por exemplo:
//expect(5).toBe('5'); // fail

// toEqual
//Para testar a igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

/* test('Igualdade de array e object', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});
 */
// Nos tipos primitivos, a atribuição ocorre por valor, ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, e uma vez que o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:

let gemeoUm = 'Cabelo comprido';
let gemeoDois = gemeoUm;

gemeoUm = 'Careca';

//console.log(gemeoUm); // Careca
//console.log(gemeoDois); // Cabelo comprido

// Por outro lado, os objetos têm atribuição por referência, ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, portanto podemos considerar que é uma forma de criar um apelido (alias) para o original, isto é, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:

let myName = { firstName: 'Pedro' };
let identity = myName;

myName.firstName = 'Carol';

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

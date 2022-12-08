// Exercícios - agora, a prática
/* Parte I
🚀 1.Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

Copie o código abaixo e rode-o para verificar sua saída: */

/* function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade() */

// 🚀2.Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  /* pessoa = {
    nome: 'Luna',
    idade: 19
  }  */// Altere essa estrutura para corrigir o erro.
  pessoa.nome = 'Luna';
  pessoa.idade = 19;

  //console.log('Nome:', pessoa.nome);
  //console.log('Idade:', pessoa.idade);

  // 🚀 3.Modifique a variável para que não ocorra Erro;

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  //console.log(favoriteFood);

  // 🚀 4.Modifique as concatenações para template literals.

  const name = 'Adriana';
  const lastName = 'Soares';
  //console.log('Olá' + ',' + name + ' ' + lastName + '!');
  //console.log(`Olá ${name} ${lastName}!`);

  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  //console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
  //console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)})`);
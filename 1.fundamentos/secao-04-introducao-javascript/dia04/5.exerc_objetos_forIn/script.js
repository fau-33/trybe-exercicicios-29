// 🚀 Exercícios - objetos e for/in

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
// Bem-vinda, Margarida

let mensagem = 'Bem-vinda, ' + info.personagem;
//console.log(mensagem);

// 2.Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
 /* {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
} */

info['recorrente'] = 'Sim';
//console.log(info);

// 3.Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
/* personagem
origem
nota
recorrente */

for (let key in info) {
  //console.log(key);
}

// 4.Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

/* Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim */

for (let value in info) {
  //console.log(info[value]);
}

// 5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

/* Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
 */

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let propriedade in info) {
  if (
    propriedade === 'recorrente' &&
    info[propriedade] === 'Sim' &&
    info2[propriedade] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[propriedade] + ' e ' + info2[propriedade]);
  }
}


// O forEach é uma HOF que percorre o array e executa uma função para cada um dos seus valores e não retorna nada.

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((item ) => {
  emailListInData
  console.log(`O email ${item} está cadastrado no nossos banco de dados`);
});
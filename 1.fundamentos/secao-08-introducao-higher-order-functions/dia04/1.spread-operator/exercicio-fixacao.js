// Para fixar
// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Manga', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mel', 'Leite', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  const newList = [...fruit, ...additional];
  return newList;
};

console.log(fruitSalad(specialFruit, additionalItens));

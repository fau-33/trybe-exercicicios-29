// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

// Algoritmo - Baby steps
//1.Adicionar o array;
//2.Criar uma variável com valor 0;
//3.Criar um loop que percorre o array;
//4.Incrementar a variável com o valor correspondente a cada loop;
//5.Criar um if com a condição de a variável ser maior que 15;
//6.Caso a variável obedeça à condição:
//1.Imprimir a variável
//8.Caso não obedeça à condição:
//1.Imprimir a mensagem “valor menor que 16”.


let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log("Valor menor que 16");
}

  


//Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.

//Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//valorCustoTotal = valorCusto + impostoSobreOCusto;
//lucro = valorVenda - valorCustoTotal (lucro de um produto);

const custoDoProduto = 1;
const valorDeVenda = 3;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  const totalCustoDoProduto = custoDoProduto * 1.2;
  const totalProfit = (valorDeVenda - totalCustoDoProduto) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
}
// E o que são funções puras? São funções cujo resultado é determinado puramente pelos argumentos passados a elas, ou seja, o retorno é sempre previsível. Por exemplo, uma função que retorna o dobro do valor recebido como argumento. Então, sempre que o argumento for 2, o valor de retorno será 4.

function pureFunction(x) {
  return x * 2 ;
}

pureFunction(2) // retorna 4

// De outro modo, se a função acessa ou modifica qualquer coisa que não tenha sido passada como parâmetro a ela, é então uma função impura.

//Exemplos de funções impuras:

var count = 0;

function increaseCount(val) {
    count += val;
}

function getSomething() {
    return count > 0;
}
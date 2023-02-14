// O funcionamento do operador await

const a = funcaoQueRetornaPromise();
const b = await funcaoQueRetornaPromise();

//console.log(a) // Aqui o console vai imprimir a Promise em si. 
//console.log(b) // Aqui o console vai imprimir o resultado da Promise

// Funções assincronas

// Essa função retorna o número 1. 
function foo() {
  return 1;
}

// Essa função retorna uma Promise (que resolve no número 1). 
async function bar() {
  return 1;
}

// Lidando com erros
const cep = '30130-010'; 
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
} catch(error) {
  console.log(error)
}

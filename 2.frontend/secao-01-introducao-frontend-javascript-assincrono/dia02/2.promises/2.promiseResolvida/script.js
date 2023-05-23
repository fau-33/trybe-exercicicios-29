// função que gera um numero aleatórios
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });


resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((error) => {
    console.log(`com a promise resolvida, não irá passar pelo catch`);
  })
  .finally(() => console.log('Fim da execução do primeira promise'));

rejectedPromise()
  .then((response) => {
    console.log(`com a promise rejeitada, não irá passar pelo then`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  });
  //.finally(() => console.log('Fim da execução da primeira promise.'));

// código que não é assíncrono.
// Será executado antes do retorno da resolvedPromise
// mesmo estando após ela no código
console.log(
  `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
);
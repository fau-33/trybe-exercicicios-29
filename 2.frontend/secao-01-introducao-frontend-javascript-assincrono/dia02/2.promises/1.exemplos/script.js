// Promises => é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

//new Promise((resolve, reject) => {});

// Retornando valores quando a promise é resolvida

// função que gera um número aleatório
//const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  // Retornando um erro quando a promise é rejeitada

  // função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
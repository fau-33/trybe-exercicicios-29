// Sorteador de loteria

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabéns, você ganhou! ': 'Tente Novamente';
}

console.log(lotteryResult(10, numberChecker));
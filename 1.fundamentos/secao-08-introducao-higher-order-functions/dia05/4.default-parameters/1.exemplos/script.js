// Default Parameters

/* const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome pessoa usuária!
 */

//const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

//greeting(); // // Welcome pessoa usuária!

// Para Fixar

const multiply = (number, value = 1) => {
  return number * value;
};

//console.log(multiply(8));
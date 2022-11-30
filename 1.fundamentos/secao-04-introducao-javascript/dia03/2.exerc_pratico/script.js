// 1.crie um algoritmo que imprima na tela o fatorial de 10.
// O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

//console.log(fatorial);

// 2.Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reserveWord = '';

for (let index = 0; index < word.length; index += 1) {
  reserveWord += word[word.length - 1 - index]; 
}

//console.log(reserveWord);


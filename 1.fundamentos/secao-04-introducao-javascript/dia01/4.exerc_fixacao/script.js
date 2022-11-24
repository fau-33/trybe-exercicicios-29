/* Operador AND
O operador “AND” (ou &&, no JavaScript) é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.

Para abstrair seu funcionamento, pense o seguinte: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz “Por favor, me vê um cafezinho E um pão na chapa”.

Seria muito infeliz se você recebesse apenas o café ou só o pão, não é? Também não seria legal se recebêssemos um pão na chapa, mas a nossa bebida fosse um caldo de cana. Porque nossa expectativa era de que as duas condições fossem atendidas corretamente. Esse é exatamente o papel do &&. Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.

Em JavaScript, nosso pedido poderia ser interpretado da seguinte maneira:
 */
/* const comida = 'pão na chapa';
const bebida = 'suco';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} */

const conditionOne = true;
const conditionTwo = false;

//console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
//console.log(listaDeCompras);

//console.log(true && true); // true
//console.log(true && false); // false
//console.log(false && true); // false
//console.log(false && false); // false

// Para fixar
// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const currentHour = 15;
// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
let message = '';
// Implemente condicionais para que:

//Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

//Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

//Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

//Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.

//Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
/* if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado';
} */

//console.log(message);

// Operador OR
//Você já viu um operador em que as duas condições devem ser verdadeiras para que o resultado final seja verdadeiro.

//Com o operador OR (ou ||, no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo.

//Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

/* const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
 */

//console.log(true || true); // true
//console.log(true || false); // true
//console.log(false || true); // true
//console.log(false || false); // false

// Para fixar
// Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
const weekDay = "sexta-feira";
// Utilizando if/else, implemente condicionais para que:

//Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

//Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

/* if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else {
  console.log("FINALMENTE, descanso merecido Uwu");
}
 */

// Operador NOT
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
// Strings
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
// Numeros
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
// Valores nulos
console.log(!null); // true
// valores indefinidos
console.log(!undefined); // true
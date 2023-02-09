const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

/* console.log(customer1)
customer1.lastName = 'Faria';
console.log(customer1); */

let newKey = 'lastName';
const lastName = 'Faria';
/* customer1[newKey] = lastName;
console.log(customer1); */

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
}

adicionaPropriedade(customer1, newKey, lastName);
//console.log(customer1);

newKey = 'fullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;

adicionaPropriedade(customer1, newKey, fullName);
console.log(customer1);




const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

/* console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);
 */


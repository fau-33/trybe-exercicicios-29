// 🚀 Lidando com Arrays
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
// 1.Percorra o array imprimindo todos os valores nele contidos com a função console.log();
/* for (let number of numbers) {
  console.log(number);
} */

/* for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

// 2.Some todos os valores contidos no array e imprima o resultado;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
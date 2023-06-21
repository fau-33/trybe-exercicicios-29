// A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

 const verificaIdadeMenor18 = idades.find((idade) => idade < 20); // 18
 console.log(verificaIdadeMenor18);

 const verificaIdadeMaior50 = idades.find((idade) => idade > 50); // 73
 console.log(verificaIdadeMaior50);

 const verificaIdadeNula = idades.find((idade) => idade === 33); // undefined
 console.log(verificaIdadeNula);

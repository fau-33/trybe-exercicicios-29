// Array.every => retorna true se todos os elementos de um array satisfazem a uma condição.

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'Aprovado'); // false

console.log(verifyGrades);


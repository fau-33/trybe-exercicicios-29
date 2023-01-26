// bloco describe

// Você pode utilizar describe, por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. Dentro de cada bloco, qualquer declaração de variáveis ou funções é local a esse bloco.

const multiply = (a, b) => a * b;
const subtract = (c, d) => c - d;

describe('testa função multiply', () => {
  test('retorna multiplicação com números positivos', () => {
    expect(multiply(10, 4)).toBe(40);
  });
  test('retorna multiplicação com número negativo', () => {
    expect(multiply(10, -4)).toBe(-40);
  });
})
describe('testa função subtract', () => {
  test('retorna subtração de número menor', () => {
    expect(subtract(12, 7)).toBe(5);
  });
  test('retorna subtração de número maior', () => {
    expect(subtract(3, 4)).toBe(-1);
  });
})

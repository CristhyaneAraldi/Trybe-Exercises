const math = require('./math');

// 1- Faça o mock da funcão subtrair e teste sua chamada.

test('Testa a chamada da função subtrair', () => {
  math.subtrair = jest.fn();
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('Testa a chamada da função multiplicar e seu retorno', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});
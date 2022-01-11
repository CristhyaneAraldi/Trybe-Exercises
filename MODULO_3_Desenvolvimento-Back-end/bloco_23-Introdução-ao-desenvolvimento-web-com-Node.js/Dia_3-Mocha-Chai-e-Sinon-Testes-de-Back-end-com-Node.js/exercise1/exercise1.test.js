const { expect } = require('chai');

const { avaliaNumero } = require('./exercise1.js');

describe('Executa a função avaliaNumero', () => {
  describe('Quando o número passado for maior que 0', () => {
    describe('A resposta', () => {

      it('é uma string', () => {
        const resposta = avaliaNumero(10);
        expect(resposta).to.be.a('string');
      });

      it('é um número "positivo"', () => {
        const resposta = avaliaNumero(10);
        expect(resposta).to.be.equals('positivo');
      });

    });
  });

  describe('Quando o número passado for menor que 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const resposta = avaliaNumero(-2);
        expect(resposta).to.be.a('string');
      });

      it('é um número "negativo"', () => {
        const resposta = avaliaNumero(-2);
        expect(resposta).to.be.equals('negativo');
      });

    });
  });

  describe('Quando o número passado for igual 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const resposta = avaliaNumero(0);
        expect(resposta).to.be.a('string');
      });

      it('é um número "neutro"', () => {
        const resposta = avaliaNumero(0);
        expect(resposta).to.be.equals('neutro');
      });

    });
  });
});
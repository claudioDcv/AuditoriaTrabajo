const assert = require('assert');
const calculadora = require('../calculadora');

describe('Probar Calculadora', function() {
  describe('Test de funcion sumar', function() {
    it('al pasar 4 y 3 debe salir un 7', function() {
      const salida = calculadora.sumar(4, 3);
      assert.equal(7, salida);
    });
    it('al pasar 10 y 10 debe salir un 20', function() {
      const salida = calculadora.sumar(10, 10);
      assert.equal(20, salida);
    });
  });
  describe('Test de funcion restar', function() {
    it('al pasar 4 y 3 debe salir un 1', function() {
      const salida = calculadora.restar(4, 3);
      assert.equal(1, salida);
    });
    it('al pasar 10 y 10 debe salir un 0', function() {
      const salida = calculadora.restar(10, 10);
      assert.equal(0, salida);
    });
  });
  describe('Test de funcion multiplicar', function() {
    it('al pasar 4 y 3 debe salir un 12', function() {
      const salida = calculadora.multiplicar(4, 3);
      assert.equal(12, salida);
    });
    it('al pasar 10 y 10 debe salir un 100', function() {
      const salida = calculadora.multiplicar(10, 10);
      assert.equal(100, salida);
    });
  });
  describe('Test de funcion multiplicar', function() {
    it('al pasar 3 y 4 debe salir un 0.75', function() {
      const salida = calculadora.dividir(3, 4);
      assert.equal(0.75, salida);
    });
    it('al pasar 10 y 0 debe salir un Infinity', function() {
      const salida = calculadora.dividir(10, 0);
      assert.equal(Infinity, salida);
    });
  });
})

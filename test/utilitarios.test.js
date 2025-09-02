const Utilitarios = require('../src/utilitarios');
const util = new Utilitarios();

describe('Utilitarios', () => {
  test('inverterString', () => {
    expect(util.inverterString('lucas')).toBe('sacul');
  });

  test('contarCaracteres', () => {
    expect(util.contarCaracteres('lucas')).toBe(5);
  });

  test('paraMaiusculas', () => {
    expect(util.paraMaiusculas('lucas')).toBe('LUCAS');
  });

  test('paraMinusculas', () => {
    expect(util.paraMinusculas('LUCAS')).toBe('lucas');
  });

  test('primeiraLetraMaiuscula', () => {
    expect(util.primeiraLetraMaiuscula('lucas')).toBe('Lucas');
  });

  test('somar', () => {
    expect(util.somar(2, 2)).toBe(4);
  });

  test('subtrair', () => {
    expect(util.subtrair(3, 2)).toBe(1);
  });

  test('multiplicar', () => {
    expect(util.multiplicar(4, 3)).toBe(12);
  });

  test('dividir', () => {
    expect(util.dividir(10, 2)).toBe(5);
    expect(() => util.dividir(5, 0)).toThrow('Divisão por zero');
  });

  test('ehPar', () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test('primeiroElemento', () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('ultimoElemento', () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('tamanhoArray', () => {
    expect(util.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('ordenarArray', () => {
    expect(util.ordenarArray(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
  });

  test('inverterArray', () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('ehNumero', () => {
    expect(util.ehNumero(42)).toBe(true);
    expect(util.ehNumero('42')).toBe(false);
  });

  test('removerEspacos', () => {
    expect(util.removerEspacos('  texto  ')).toBe('texto');
  });

  test('repetirTexto', () => {
    expect(util.repetirTexto('lucas', 3)).toBe('lucaslucaslucas');
  });

  test('juntarArray', () => {
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('contarPalavras', () => {
    expect(util.contarPalavras('lucas lucas lucas')).toBe(3);
  });

  test('mediaArray', () => {
    expect(util.mediaArray([2, 4, 6])).toBe(4);
    expect(util.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(util.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('ehPalindromo', () => {
    expect(util.ehPalindromo('arara')).toBe(true);
    expect(util.ehPalindromo('lucas')).toBe(false);
  });

  test('mesclarObjetos', () => {
    expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
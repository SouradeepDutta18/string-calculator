const StringCalculator = require('../src/stringCalculator');

test('returns zero for a empty string', () => {
  expect(StringCalculator.add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(StringCalculator.add('1')).toBe(1);
});

test('returns the sum of two numbers separated by a comma', () => {
  expect(StringCalculator.add('1,2')).toBe(3);
});

test('returns the sum of when number string contain both newline and comma', () => {
  expect(StringCalculator.add('1\n2,3')).toBe(6);
});
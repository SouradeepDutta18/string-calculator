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
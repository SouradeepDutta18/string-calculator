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

test('returns the sum when number string contain both newline and comma', () => {
  expect(StringCalculator.add('1\n2,3')).toBe(6);
});

test('returns the sum when number string contain different delimeter', () => {
  expect(StringCalculator.add('//;\n1;2')).toBe(3);
});

it('should throw an error for negative numbers with the correct message', function() {
  const input = '1,-2';
  expect(() => StringCalculator.add(input)).toThrow('negative numbers not allowed -2');
});

it('should throw an error for negative numbers with the correct message', function() {
  const input = '1,-2,-3';
  expect(() => StringCalculator.add(input)).toThrow('negative numbers not allowed -2,-3');
});
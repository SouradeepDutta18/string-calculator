const StringCalculator = require('../src/stringCalculator');

test('returns zero for a empty string', () => {
    expect(StringCalculator.add('')).toBe(0);
  });
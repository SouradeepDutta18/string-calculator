class StringCalculator {
  static add(input) {
    if (input === '') return 0;
    const numbers = input.split(',').map(Number);
    return numbers.reduce((sum, n) => sum + n, 0);
  }
}

module.exports = StringCalculator;


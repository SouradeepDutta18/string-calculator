class StringCalculator {
  static add(input) {
    if (input === '') return 0;
    // delimiter supporting both comma and newline character
    let delimiter = /,|\n/;
    const numbers = input.split(delimiter).map(Number);
    return numbers.reduce((sum, n) => sum + n, 0);
  }
}

module.exports = StringCalculator;


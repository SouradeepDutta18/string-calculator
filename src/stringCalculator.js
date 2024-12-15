class StringCalculator {
  static add(input) {
    if (input === '') return 0;

    // Default delimiter supporting both comma and newline character
    const defaultDelimiter = /,|\n/;
    const changingDelimiterRegex = /\/\//;

    // Array to store the numbers
    const nums = [];

    // Finding the first delimiter change
    const firstDelimiterChange = input.match(changingDelimiterRegex);

    // If no delimiter change detected, we can proceed with the default delimiter
    if (!firstDelimiterChange) {
      const numbers = input.split(defaultDelimiter).map(Number);
      nums.push(...numbers);
    } else {
      // Substring that does not contain delimiter change (e.g., "1,3//;\n1;2")
      const subStrWithDefaultDelimiter = firstDelimiterChange.index > 0
        ? input.slice(0, firstDelimiterChange.index - 1)
        : '';

      if (subStrWithDefaultDelimiter) {
        nums.push(...subStrWithDefaultDelimiter.split(defaultDelimiter).map(Number));
      }

      // Getting substring with only the part that contains the string with delimiter changes
      const remainingRegexWithoutDelimiter = input.slice(firstDelimiterChange.index);

      // Loop over the lines split by the delimiter change regex
      for (let line of remainingRegexWithoutDelimiter.split(changingDelimiterRegex)) {
        if (!line) continue;

        const delimiter = new RegExp(line[0]);
        const lineWithoutNewLineChar = line.slice(2);

        nums.push(...lineWithoutNewLineChar.split(delimiter).map(Number));
      }
    }

    return nums.reduce((num1, num2) => num1 + num2, 0);
  }
}

module.exports = StringCalculator;

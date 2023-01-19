class LegacyCalculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}

class Calculator {
  constructor() {
    this.legacyCalculator = new LegacyCalculator();
  }

  add(x, y) {
    return this.legacyCalculator.add(x, y);
  }

  subtract(x, y) {
    return this.legacyCalculator.subtract(x, y);
  }

  multiply(x, y) {
    return this.legacyCalculator.multiply(x, y);
  }

  divide(x, y) {
    return this.legacyCalculator.divide(x, y);
  }

  pow(x, y) {
    return Math.pow(x, y);
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.subtract(1, 2)); // Output: -1
console.log(calculator.multiply(2, 3)); // Output: 6
console.log(calculator.divide(6, 2)); // Output: 3
console.log(calculator.pow(2, 3)); // Output: 8

class Command {
  execute() {
    throw new Error("This method must be overridden.");
  }
}

class AddCommand extends Command {
  constructor(receiver, value) {
    super();
    this.receiver = receiver;
    this.value = value;
  }

  execute() {
    this.receiver.add(this.value);
  }
}

class SubtractCommand extends Command {
  constructor(receiver, value) {
    super();
    this.receiver = receiver;
    this.value = value;
  }

  execute() {
    this.receiver.subtract(this.value);
  }
}

class Calculator {
  constructor() {
    this.currentValue = 0;
  }

  add(value) {
    this.currentValue += value;
    console.log(`Added ${value}. Result: ${this.currentValue}`);
  }

  subtract(value) {
    this.currentValue -= value;
    console.log(`Subtracted ${value}. Result: ${this.currentValue}`);
  }
}

const calculator = new Calculator();
const addCommand = new AddCommand(calculator, 5);
const subtractCommand = new SubtractCommand(calculator, 3);

addCommand.execute(); // Output: Added 5. Result: 5
subtractCommand.execute(); // Output: Subtracted 3. Result: 2

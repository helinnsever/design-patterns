class Subsystem1 {
  operation1() {
    return "Subsystem1: Ready!";
  }
  operationN() {
    return "Subsystem1: Go!";
  }
}

class Subsystem2 {
  operation1() {
    return "Subsystem2: Get ready!";
  }
  operationZ() {
    return "Subsystem2: Fire!";
  }
}

class Facade {
  constructor(subsystem1, subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }
  operation() {
    let result = "Facade initializes subsystems: \n";
    result += this.subsystem1.operation1();
    result += "\n";
    result += this.subsystem1.operationN();
    result += "\n";
    result += this.subsystem2.operation1();
    result += "\n";
    result += this.subsystem2.operationZ();
    return result;
  }
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
console.log(facade.operation());

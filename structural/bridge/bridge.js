class Abstraction {
  constructor(implementation) {
    this.implementation = implementation;
  }
  operation() {
    return this.implementation.operationImplementation();
  }
}

class Implementation {
  operationImplementation() {
    return "operation implementation";
  }
}

class ExtendedAbstraction extends Abstraction {
  operation() {
    return `ExtendedAbstraction: ${super.operation()}`;
  }
}

class ExtendedImplementation extends Implementation {
  operationImplementation() {
    return `ExtendedImplementation: ${super.operationImplementation()}`;
  }
}

const implementation = new Implementation();
const abstraction = new Abstraction(implementation);
console.log(abstraction.operation());

const extendedImplementation = new ExtendedImplementation();
const extendedAbstraction = new ExtendedAbstraction(extendedImplementation);
console.log(extendedAbstraction.operation());

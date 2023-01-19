class Component {
  operation() {
    return "Component";
  }
}

class ConcreteComponent extends Component {
  operation() {
    return "ConcreteComponent";
  }
}

class Decorator {
  constructor(component) {
    this.component = component;
  }
  operation() {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

const simple = new ConcreteComponent();
console.log(`Result: ${simple.operation()}`);

const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorB(decoratorA);
console.log(`Result: ${decoratorB.operation()}`);

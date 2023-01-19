import { Container } from "inversify";
class Engine {
  start() {
    console.log("Engine started.");
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.start();
    console.log("Car started.");
  }
}

const engine = new Engine();
const car = new Car(engine);
car.start(); // Output: "Engine started." "Car started."

const container = new Container();
container.bind(Engine).to(Engine);
container.bind(Car).to(Car);

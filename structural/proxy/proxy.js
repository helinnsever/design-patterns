class Car {
  drive() {
    console.log("Car is moving.");
  }
}

class CarProxy {
  constructor(car) {
    this.car = car;
  }

  drive() {
    if (this.hasAccess()) {
      this.car.drive();
    } else {
      console.log("You have no permission to drive the car.");
    }
  }

  hasAccess() {
    return true;
  }
}

const car = new Car();
const carProxy = new CarProxy(car);
carProxy.drive(); // Output: "Car is moving."

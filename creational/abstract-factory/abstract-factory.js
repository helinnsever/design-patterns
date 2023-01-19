class Ford {
  createCar() {
    return new FordCar();
  }
  createTruck() {
    return new FordTruck();
  }
}

class Toyota {
  createCar() {
    return new ToyotaCar();
  }
  createTruck() {
    return new ToyotaTruck();
  }
}

class FordCar {
  info() {
    return "Ford Car";
  }
}

class FordTruck {
  info() {
    return "Ford Truck";
  }
}

class ToyotaCar {
  info() {
    return "Toyota Car";
  }
}

class ToyotaTruck {
  info() {
    return "Toyota Truck";
  }
}

function clientCode(factory) {
  const car = factory.createCar();
  const truck = factory.createTruck();
  console.log(car.info());
  console.log(truck.info());
}

console.log("Testing Ford Factory");
clientCode(new Ford());
console.log("Testing Toyota Factory");
clientCode(new Toyota());

/* Output:
    Testing Ford Factory
    Ford Car
    Ford Truck
    Testing Toyota Factory
    Toyota Car
    Toyota Truck
*/

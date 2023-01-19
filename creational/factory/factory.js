class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "white";
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "coupe":
        return new Car({ doors: 2 });
      case "sedan":
        return new Car({ doors: 4 });
      case "convertible":
        return new Car({ doors: 2, state: "used" });
      default:
        throw new Error(`Car type ${type} is not supported.`);
    }
  }
}

const factory = new CarFactory();
const coupe = factory.createCar("coupe");
console.log(coupe.doors); // Output: 2
console.log(coupe.state); // Output: "brand new"
console.log(coupe.color); // Output: "white"

const sedan = factory.createCar("sedan");
console.log(sedan.doors); // Output: 4
console.log(sedan.state); // Output: "brand new"
console.log(sedan.color); // Output: "white"

const convertible = factory.createCar("convertible");
console.log(convertible.doors); // Output: 2
console.log(convertible.state); // Output: "used"
console.log(convertible.color); // Output: "white"

class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "white";
  }

  clone() {
    return new Car(this);
  }
}

const car = new Car({ color: "red", state: "used" });
const car2 = car.clone();
console.log(car2.color); // Output: "red"
console.log(car2.state); // Output: "used"
console.log(car2.doors); // Output: 4

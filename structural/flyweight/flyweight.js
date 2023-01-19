class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
  operation(uniqueState) {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    return `Flyweight: Displaying shared (${s}) and unique (${u}) state.`;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }
  getFlyweight(sharedState) {
    if (this.flyweights[sharedState]) {
      return this.flyweights[sharedState];
    } else {
      console.log(
        "FlyweightFactory: Can't find a flyweight, creating new one."
      );
      this.flyweights[sharedState] = new Flyweight(sharedState);
      return this.flyweights[sharedState];
    }
  }
  listFlyweights() {
    const count = Object.keys(this.flyweights).length;
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
  console.log("\nClient: Adding a car to database.");
  const flyweight = ff.getFlyweight([brand, model, color]);
  console.log(flyweight.operation([plates, owner]));
}

const factory = new FlyweightFactory();
addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");
addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "blue");
factory.listFlyweights();

class Light {
  constructor() {
    this.state = new OffState(this);
  }

  setState(state) {
    this.state = state;
  }

  turnOn() {
    this.state.turnOn();
  }

  turnOff() {
    this.state.turnOff();
  }
}

class OffState {
  constructor(light) {
    this.light = light;
  }

  turnOn() {
    console.log("Turning on the light.");
    this.light.setState(new OnState(this.light));
  }

  turnOff() {
    console.log("The light is already off.");
  }
}

class OnState {
  constructor(light) {
    this.light = light;
  }

  turnOn() {
    console.log("The light is already on.");
  }

  turnOff() {
    console.log("Turning off the light.");
    this.light.setState(new OffState(this.light));
  }
}

const light = new Light();
light.turnOn(); // Output: "Turning on the light."
light.turnOff(); // Output: "Turning off the light."
light.turnOff(); // Output: "The light is already off."

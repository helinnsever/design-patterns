class Sandwich {
  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  listIngredients() {
    console.log(`Ingredients: ${this.ingredients.join(", ")}`);
  }
}

class SandwichBuilder {
  constructor() {
    this.sandwich = new Sandwich();
  }

  addBread() {
    this.sandwich.addIngredient("bread");
  }

  addMeat() {
    this.sandwich.addIngredient("meat");
  }

  addCheese() {
    this.sandwich.addIngredient("cheese");
  }

  addLettuce() {
    this.sandwich.addIngredient("lettuce");
  }

  addTomato() {
    this.sandwich.addIngredient("tomato");
  }

  build() {
    return this.sandwich;
  }
}

const builder = new SandwichBuilder();
builder.addBread();
builder.addMeat();
builder.addCheese();
builder.addLettuce();
builder.addTomato();
const sandwich = builder.build();
sandwich.listIngredients();
// Output: "Ingredients: bread, meat, cheese, lettuce, tomato"

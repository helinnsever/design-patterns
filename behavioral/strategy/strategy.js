class ShoppingCart {
  constructor(paymentMethod) {
    this.items = [];
    this.paymentMethod = paymentMethod;
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.items.reduce((a, b) => a + b.price, 0);
  }

  checkout() {
    const total = this.calculateTotal();
    return this.paymentMethod.pay(total);
  }
}

class CreditCard {
  pay(amount) {
    console.log(`Paying $${amount} with credit card.`);
  }
}

class PayPal {
  pay(amount) {
    console.log(`Paying $${amount} with PayPal.`);
  }
}

const cart = new ShoppingCart(new CreditCard());
cart.addItem({ name: "item1", price: 10 });
cart.addItem({ name: "item2", price: 20 });
cart.checkout(); // Output: "Paying $30 with credit card."

cart.paymentMethod = new PayPal();
cart.checkout(); // Output: "Paying $30 with PayPal."

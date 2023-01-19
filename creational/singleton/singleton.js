class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.data = [];
    Database.instance = this;
  }

  add(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // Output: true

db1.add("item1");
console.log(db1.getData()); // Output: ["item1"]
console.log(db2.getData()); // Output: ["item1"]

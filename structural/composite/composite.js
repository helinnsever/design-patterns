class Component {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  add(component) {}
  remove(component) {}
  getChild(index) {}
  isComposite() {
    return false;
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  remove(component) {
    this.children = this.children.filter((child) => child !== component);
  }
  getChild(index) {
    return this.children[index];
  }
  isComposite() {
    return true;
  }
  display() {
    console.log(this.getName());
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].display();
    }
  }
}

class Leaf extends Component {
  display() {
    console.log(this.getName());
  }
}

const composite = new Composite("root");
composite.add(new Leaf("Leaf A"));
composite.add(new Leaf("Leaf B"));

const composite2 = new Composite("Composite X");
composite2.add(new Leaf("Leaf XA"));
composite2.add(new Leaf("Leaf XB"));

composite.add(composite2);
composite.display();

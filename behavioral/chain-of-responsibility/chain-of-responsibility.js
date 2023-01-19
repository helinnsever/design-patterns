class Request {
  constructor(type) {
    this.type = type;
  }
}

class RequestA extends Request {
  constructor() {
    super("A");
  }
}

class RequestB extends Request {
  constructor() {
    super("B");
  }
}

class Handler {
  constructor(next) {
    this.next = next;
  }

  handle(request) {
    if (this.next) {
      this.next.handle(request);
    }
  }
}

class ConcreteHandlerA extends Handler {
  handle(request) {
    if (request.type === "A") {
      // handle request
    } else {
      super.handle(request);
    }
  }
}

class ConcreteHandlerB extends Handler {
  handle(request) {
    if (request.type === "B") {
      // handle request
    } else {
      super.handle(request);
    }
  }
}

let a = new ConcreteHandlerA(new ConcreteHandlerB());

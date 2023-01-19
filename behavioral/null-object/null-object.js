class Logger {
  log(message) {
    console.log(`[${new Date()}] ${message}`);
  }
}

class NullLogger {
  log() {
    // do nothing
  }
}

class User {
  constructor(name, logger = new NullLogger()) {
    this.name = name;
    this.logger = logger;
  }

  login() {
    this.logger.log(`User ${this.name} logged in.`);
  }
}

const user1 = new User("John Doe");
user1.login(); // Output: nothing

const logger = new Logger();
const user2 = new User("Jane Smith", logger);
user2.login(); // Output: "[current time] User Jane Smith logged in."

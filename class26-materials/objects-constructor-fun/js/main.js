//Create a constructor with 4 properties and 3 methods
class FERRARI {
  constructor(wheel) {
    this.wheel = wheel;
  }

  createFerrari() {
    return this.wheel;
  }
}

const ferra = new FERRARI("ferrari");

console.log(ferra.createFerrari());

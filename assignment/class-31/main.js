class Game {
  constructor(el) {
    this._el = document.querySelector(el);
  }
  get el() {
    return this.el;
  }
}

class ButtonFirst extends Game {
  constructor(el, value) {
    super(el);
    this._value = value;
  }
  get value() {
    return this.value;
  }
  newLetter() {
    return (el.textContent = value);
  }
}

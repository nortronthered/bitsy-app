class SolidColor {
  constructor(red, green, blue) {
    this.updateColor(red, green, blue)
  }

  updateColor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  get red() {
    return this._red;
  }

  serialize() {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
    }
  }
}

module.exports = SolidColor;
class Service {
  constructor(name) {
    this.name = name;
    this.ratings = [];
  }

  giveRating(value) {
    this.ratings.push(value);
  }

  get rating() {
    if (this.ratings.length === 0) return 0;
    const num = this.ratings.reduce((a, r) => a + r, 0) / this.ratings.length;
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  // eslint-disable-next-line class-methods-use-this
  calculateCost() {
    throw new Error('Method "calculateCost()" must be implemented.');
  }
}

module.exports = Service;

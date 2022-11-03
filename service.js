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
}

module.exports = Service;

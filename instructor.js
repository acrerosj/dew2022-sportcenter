const Activity = require('./activity');

class Instructor {
  #basicSalary;

  constructor(name, basicSalary = 500) {
    this.name = name;
    this.#basicSalary = basicSalary;
    this.ledActivities = [];
  }

  get salary() {
    return this.#basicSalary;
  }

  lead(activity) {
    if (activity instanceof Activity) {
      // eslint-disable-next-line no-param-reassign
      activity.instructor = this;
      this.ledActivities.push(activity);
    }
  }
}

module.exports = Instructor;

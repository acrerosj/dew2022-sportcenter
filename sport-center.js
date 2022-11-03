/* eslint-disable comma-spacing */
const Activity = require('./activity');
const Facility = require('./facility');
const Service = require('./service');

class SportCenter {
  #services = [];

  constructor(name, fee, membership = 0) {
    this.name = name;
    this.fee = fee;
    this.membership = membership;
  }

  income() {
    return this.fee * this.membership;
  }

  getServices() {
    return this.#services;
  }

  addService(...services) {
    services.forEach((service) => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service);
      }
    });
  }

  removeService(service) {
    if (service instanceof Service) {
      const index = this.#services.indexOf(service);
      if (index >= 0) {
        this.#services.splice(index,1);
      }
    }
  }

  orderServicesBy(criteria) {
    switch (criteria) {
      case 'name': this.#services.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
        break;
      case 'rating': this.#services.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        break;
      default: break;
    }
  }

  getFacilities() {
    return this.#services.filter((s) => s instanceof Facility);
  }

  getActivities() {
    return this.#services.filter((s) => s instanceof Activity);
  }
}

module.exports = SportCenter;

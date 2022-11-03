const Activity = require('./activity');
const Facility = require('./facility');
const SportCenter = require('./sport-center');

test('Get services of a empty Sport Center', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  expect(sc.getServices()).toHaveLength(0);
  expect(sc.getServices()).toEqual([]);
});

test('Add some services and get services', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  const spa = new Facility('SPA', 3000);
  const zumba = new Activity('Zumba');
  sc.addService(spa);
  expect(sc.getServices()).toHaveLength(1);
  expect(sc.getServices()).toContain(spa);
  sc.addService(zumba);
  expect(sc.getServices()).toHaveLength(2);
  expect(sc.getServices()).toContain(spa);
  expect(sc.getServices()).toContain(zumba);
});

test('Avoid inserting elements that are not Service instances', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  sc.addService(4);
  expect(sc.getServices()).toHaveLength(0);
  expect(sc.getServices()).toEqual([]);
  sc.addService('this is text"');
  expect(sc.getServices()).toHaveLength(0);
  expect(sc.getServices()).toEqual([]);
  sc.addService(new Date());
  expect(sc.getServices()).toHaveLength(0);
  expect(sc.getServices()).toEqual([]);
});

test('Avoid inserting the same elements again', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  const zumba = new Activity('Zumba');
  sc.addService(zumba);
  expect(sc.getServices()).toHaveLength(1);
  expect(sc.getServices()).toContain(zumba);
  sc.addService(zumba);
  expect(sc.getServices()).toHaveLength(1);
  expect(sc.getServices()).toContain(zumba);
});

test('insert multiple services in the same call', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  const spa = new Facility('SPA', 3000);
  const zumba = new Activity('Zumba');
  const spinning = new Activity('Spinning', 100);
  const pilates = new Activity('Pilates', 30);

  sc.addService(spa, zumba, spinning, pilates);
  expect(sc.getServices()).toHaveLength(4);
  expect(sc.getServices()).toContain(spa);
  expect(sc.getServices()).toContain(zumba);
  expect(sc.getServices()).toContain(spinning);
  expect(sc.getServices()).toContain(pilates);
});

test('delete a service', () => {
  const sc = new SportCenter('Radazul', 45, 60);
  const spa = new Facility('SPA', 3000);
  const zumba = new Activity('Zumba');
  const spinning = new Activity('Spinning', 100);
  const pilates = new Activity('Pilates', 30);

  sc.addService(spa);
  sc.addService(zumba);
  sc.addService(spinning);
  sc.addService(pilates);
  expect(sc.getServices()).toHaveLength(4);
  expect(sc.getServices()).toContain(spa);
  expect(sc.getServices()).toContain(zumba);
  expect(sc.getServices()).toContain(spinning);
  expect(sc.getServices()).toContain(pilates);
  sc.removeService(spinning);
  expect(sc.getServices()).toHaveLength(3);
  expect(sc.getServices()).toContain(spa);
  expect(sc.getServices()).toContain(zumba);
  expect(sc.getServices()).not.toContain(spinning);
  expect(sc.getServices()).toContain(pilates);
});

"use strict";

let assert = require('chai').assert,
  expect = require('chai').expect;

var animals = [
  { name: 'Caro', species: 'rabbit' },
  { name: 'Jimmy', species: 'dog' },
  { name: 'Harold', species: 'dog' },
  { name: 'Ursula', species: 'fish' },
  { name: 'Nem', species: 'cat' },
  { name: 'Din', species: 'cat' },
];
let dogs;

describe('js-functional', () => {
  describe('01-filter', () => {
    beforeEach(() => {
      dogs = animals.filter((animal) => {
        return animal.species === 'dog';
      });
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });

    it('first dog name is Jimmy', () => {
      assert.equal(dogs[0].name, "Jimmy");
    });
  });

  describe('02-map', () => {
    beforeEach(() => {
      let names = animals.map((animal) => animal.name);
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });
  });

  describe('03-reduce', () => {
    beforeEach(() => {
      let orders = [
        { amount: 250 },
        { amount: 400 },
        { amount: 100 },
        { amount: 325 },
      ]

      let totalAmount = orders.reduce((sum, order) => {
        return sum + order.amount
      }, 0)
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });
  });

  describe('04-closures', () => {
    beforeEach(() => {
      dogs = animals.filter((animal) => {
        return animal.species === 'dog';
      });
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });
  });

  describe('05-currying', () => {
    beforeEach(() => {
      dogs = animals.filter((animal) => {
        return animal.species === 'dog';
      });
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });
  });

  describe('06-recursion', () => {
    beforeEach(() => {
      dogs = animals.filter((animal) => {
        return animal.species === 'dog';
      });
    });

    it('show dogs array size', () => {
      expect(dogs).to.have.length(2);
    });
  });
});

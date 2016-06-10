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




describe('js-functional', () => {
    describe('01-filter', () => {
        let dogs;

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

        it('names array size is 6', () => {
            let names = animals.map((animal) => animal.name);
            expect(names).to.have.length(6);
        });

    });

    describe('03-reduce', () => {

        it('totalAmount to equal 1075', () => {

            let orders = [{ amount: 250 },
                { amount: 400 },
                { amount: 100 },
                { amount: 325 }
            ];

            let totalAmount = orders.reduce((sum, order) => {
                return sum + order.amount
            }, 0);

            expect(totalAmount).to.equal(1075);
        });
    });

    describe('05-currying', () => {

        it('check is template string of currying is correct', () => {
            var dragon = name => size => element => `${name} is a ${size} dragon that breathes ${element}!`;
            var fluffykins = dragon("fluffykins")("tiny")("lightning");
            expect(fluffykins).to.equal("fluffykins is a tiny dragon that breathes lightning!");
        });
    });

});

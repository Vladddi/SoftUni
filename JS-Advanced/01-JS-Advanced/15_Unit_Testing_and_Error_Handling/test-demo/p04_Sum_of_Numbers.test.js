const {
    expect
} = require('chai');
const sum = require('./p04_Sum_of_Numbers');

describe('Array of numbers', () => {
    it('Return the sum of the values of all elements is true', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    });
});
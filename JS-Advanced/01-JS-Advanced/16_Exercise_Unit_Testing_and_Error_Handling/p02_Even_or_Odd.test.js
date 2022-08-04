const {
    expect
} = require('chai');
const {
    isOddOrEven
} = require('./p02_Even_or_Odd');

describe('Test oddOrEven', () => {
    it('Test invalid input', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Test if odd is returned', () => {
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });

    it('Test if even is returned', () => {
        expect(isOddOrEven('asdf')).to.be.equal('even');
        expect(isOddOrEven('')).to.be.equal('even');
    });
});
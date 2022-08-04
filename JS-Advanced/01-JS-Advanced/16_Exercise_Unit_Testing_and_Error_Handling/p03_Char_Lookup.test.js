const {
    expect
} = require('chai');
const lookupChar = require('./p03_Char_Lookup');

describe('charLookup', () => {
    it('', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('abc', 1.2)).to.be.undefined;
        expect(lookupChar('abc', 'a')).to.be.undefined;
    });
    
    it('', () => {
        expect(lookupChar('abv', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('abv', 4)).to.be.equal('Incorrect index');
    });
    
    it('', () => {
        expect(lookupChar('abv', 0)).to.be.equal('a');
        expect(lookupChar('abv', 2)).to.be.equal('v');
    });


});
const {
    expect
} = require('chai');
const numberOperations = require('./03_Number_Operations_Resources');

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('return corect power of the given number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(1.5)).to.equal(1.5 * 1.5);
            expect(numberOperations.powNumber(-4)).to.equal(16);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(NaN)).to.NaN;
        });
    });

    describe('numberChecker', () => {
        it('Should correctly coerce input arguments', () => {
            expect(numberOperations.numberChecker('3')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
        });

        it('Should throw when passed a argument that coerces to NaN', () => {
            expect(() => numberOperations.numberChecker('abc')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker('123b')).to.throw('The input is not a number!');
        });

        it('Should return correct string when argument is a valid number', () => {
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-100')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('123.45')).to.equal('The number is greater or equal to 100!');
        });

    });

    describe('sumArrays', () => {
        it('Should return empty array when called with ampty arrays', () => {
            expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
    });
       
        it('Should return correct result when both parameters are non empty equal length arrays', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [2, 3, 4])).to.deep.equal([3, 5, 7]);
            expect(numberOperations.sumArrays([-1, 2, 3], [-2, 3, 4])).to.deep.equal([-3, 5, 7]);
            expect(numberOperations.sumArrays([1.1, 2, 3], [2.2, 3, 4])).to.deep.equal([1.1 + 2.2, 5, 7]);
            expect(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c', 'd'])).to.deep.equal(['ab', 'bc', 'cd']);
        });
        
        it('Should return correct result when both parameters are non empty arrays of different length', () => {
            expect(numberOperations.sumArrays([1.1, 2, 8], [2.2, 3])).to.deep.equal([1.1 + 2.2, 5, 8]);
            expect(numberOperations.sumArrays([-1, 2, 7], [-2, 3])).to.deep.equal([-3, 5, 7]);
            expect(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c'])).to.deep.equal(['ab', 'bc', 'c']);
        });
    });
});
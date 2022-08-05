const {
    expect
} = require('chai');
const testNumbers = require('./testNumbers');

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00');
        });

        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.be.equal('-1.00');
        });

        it('works with floating point', () => {
            expect(testNumbers.sumNumbers(1.5555, 2.2222)).to.be.equal('3.78');
        });

        it('returns undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
        });

        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
        });


    });

    describe('numberChecker', () => {
        it('works with odd value', () => {
            // expect(testNumbers.numberChecker(1)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });

        it('works with even value', () => {
            // expect(testNumbers.numberChecker(2)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });

        it('works with odd value as string', () => {
            // expect(testNumbers.numberChecker('1')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });

        it('works with even value as string', () => {
            // expect(testNumbers.numberChecker('2')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it('works with empty string', () => {
            expect(testNumbers.numberChecker('')).to.contain('even');
        });

        it('detect invalid parameter', () => {
            // expect(testNumbers.numberChecker('a')).to.equal('The input is not a number!');
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('averageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});
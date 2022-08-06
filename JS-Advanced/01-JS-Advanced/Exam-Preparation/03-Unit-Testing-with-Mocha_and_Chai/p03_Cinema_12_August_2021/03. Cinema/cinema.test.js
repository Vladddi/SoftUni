const {
    expect
} = require('chai');
const cinema = require('./cinema');

describe('cinema', () => {
    describe(('showMovies'), () => {
        it('empty array', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it('array of movies', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker');
        });

        it('array of single movie', () => {
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
    });
    describe(('ticketPrice'), () => {
        it('Premiere price', () => {
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00);
        });
        it('Normal price', () => {
            expect(cinema.ticketPrice("Normal")).to.be.equal(7.50);
        });
        it('Discount price', () => {
            expect(cinema.ticketPrice("Discount")).to.be.equal(5.50);
        });
        it('Invalid input', () => {
            expect(() => cinema.ticketPrice("Invalid")).to.throw('Invalid projection type.');
        });
    });
    describe(('swapSeatsInHall'), () => {
        describe('exchange is not successful', () => {
            it('only 1 param given', () => {
                expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            });
            it('The numbers are not integers', () => {
                expect(cinema.swapSeatsInHall(1.12, 5)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 5.5)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, '5')).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall('1', 5)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(NaN, 5)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(5, NaN)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(NaN, NaN)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall('a', 'b')).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall('a', 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 'b')).to.equal('Unsuccessful change of seats in the hall.');
            });
            
            it('one of the numbers is greater than the capacity', () => {
                expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            });
            
            it('the seats a equal number', () => {
                expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            });
            
            it('Seats are less or equal of 0', () => {
                expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(-1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            });
        });
        describe('successful exchange', () => {
            it('Happy keys', () => {
                expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            });
            
            it('1 and 2 numbers given', () => {
                expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
            });
        });
    });
});
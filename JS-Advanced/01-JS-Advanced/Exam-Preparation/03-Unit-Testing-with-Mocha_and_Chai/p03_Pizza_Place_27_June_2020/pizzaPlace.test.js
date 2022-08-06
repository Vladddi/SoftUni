const {
    expect
} = require('chai');
const pizzUni = require('./pizzaPlace');

describe('pizzUni', () => {
    describe('makeAnOrder', () => {
        let pizza = {
            orderedPizza: 'pizza',
            orderedDrink: 'drink'
        };
        let pizza1 = {
            orderedDrink: 'drink'
        };
        let pizza2 = {
            orderedPizza: 'pizza'
        };
        let pizza3 = {};

        it('throw if pizza missing', () => {
            expect(() => pizzUni.makeAnOrder(pizza1)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it('throw if drink missing', () => {
            expect(() => pizzUni.makeAnOrder(pizza3)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it('order only pizza', () => {
            expect(pizzUni.makeAnOrder(pizza2)).to.equal(`You just ordered ${pizza2.orderedPizza}`);
        });
        it('order pizza and drink', () => {
            expect(pizzUni.makeAnOrder(pizza)).to.equal(`You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);
        });
    });
    describe('getRemainingWork', () => {
        let statusArr = [{
                pizzaName: 'pizza',
                status: 'ready'
            }, {
                pizzaName: 'pizza2',
                status: 'ready'
            },
            {
                pizzaName: 'pizza3',
                status: 'preparing'
            }, {
                pizzaName: 'pizza4',
                status: 'preparing'
            }
        ];
        let statusArr2 = [{
            pizzaName: 'pizza',
            status: 'ready'
        }, {
            pizzaName: 'pizza2',
            status: 'ready'
        }];
        let statusArr3 = [{
            pizzaName: 'pizza3',
            status: 'preparing'
        }, {
            pizzaName: 'pizza4',
            status: 'preparing'
        }];
        it('when status is ready', () => {
            expect(pizzUni.getRemainingWork(statusArr2)).to.equal('All orders are complete!');
        });
        it('when status is prepearing', () => {
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: pizza3, pizza4.`);
            expect(pizzUni.getRemainingWork(statusArr3)).to.equal(`The following pizzas are still preparing: pizza3, pizza4.`);
        });
    });

    describe('orderType', () => {
        let orderTypeDelivery = 'Delivery';
        let orderTypeCary = 'Carry Out';
        let totalSum = 100;
        let totalSum1 = -100;
        let totalSum2 = 0;

        it('work with (Carry Out)', () => {
            expect(pizzUni.orderType(totalSum, orderTypeCary)).to.equal(90);
            expect(pizzUni.orderType(totalSum1, orderTypeCary)).to.equal(-90);
            expect(pizzUni.orderType(totalSum2, orderTypeCary)).to.equal(0);
        });

        it('work with (Delivery)', () => {
            expect(pizzUni.orderType(totalSum, orderTypeDelivery)).to.equal(100);
            expect(pizzUni.orderType(totalSum1, orderTypeDelivery)).to.equal(-100);
            expect(pizzUni.orderType(totalSum2, orderTypeDelivery)).to.equal(0);
        });
    });
});
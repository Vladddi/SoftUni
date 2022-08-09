class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {
        products.forEach((el) => {
            let [name, quantity, totalPrice] = el.split(' ');

            quantity = Number(quantity);
            totalPrice = Number(totalPrice);
            if (this.budgetMoney >= totalPrice) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);

            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price
            }

            products.forEach((el) => {
                let [name, quantity] = el.split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            })

            const mealCount = Object.keys(this.menu).length;
            if (mealCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = [];

            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const neededProducts = {};
            for (let product in this.menu[meal].products) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else {
                    neededProducts[product] = this.menu[meal].products[product];
                }
            }

            for (let neededProduct in neededProducts) {
                this.stockProducts[neededProduct] -= neededProducts[neededProduct];
            }

            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}
//----steps-----TODO--------
/* 
1. create Restaurant class with constructor - takes budget as param
2. loadProducts object with data from the array, add Action to history
3. addToMenu method - takes meal(string), products(array), price adda meal to meal object.
Returns arrays depending on action taken.
4. showTheMenu() - returns all meals from objects formatted. If no meals returns predefined string
5. makeTheOrder() - takes meal(string). Checks if the meal can be prepeared(has enough products). 
Deducts products if meal is prepared. Prints result of the action that is taken. Adds meal price to totalBudget
*/




//-------------------------------------------------------
//-------input-------------------------------------------
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

/*--output----
Successfully loaded 10 Banana
Successfully loaded 20 Banana
Successfully loaded 50 Strawberries
Successfully loaded 10 Yogurt
There was not enough money to load 500 Yogurt
Successfully loaded 5 Honey
*/

//-------------------------------------------------------
//-------input-------------------------------------------
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

/*
Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?
*/

//-------------------------------------------------------
//-------input-------------------------------------------
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

/*
frozenYogurt - $ 9.99
Pizza - $ 15.55
*/

//-------------------------------------------------------
//-------input-------------------------------------------
// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

/*
Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
*/
//-------------------------------------------------------
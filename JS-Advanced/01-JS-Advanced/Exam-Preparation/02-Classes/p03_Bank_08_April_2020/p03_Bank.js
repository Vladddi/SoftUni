class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCutomers = [];
    }

    // customer -> object
    newCustomer({
        firstName,
        lastName,
        personalId
    }) {
        let hasCustomer = this.allCutomers.find((customer) => customer.personalId === personalId);

        if (hasCustomer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        let customer = {
            firstName,
            lastName,
            personalId
        };
        this.allCutomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer = this.getCustomerById(personalId);

        if (currentCustomer.totalMoney) {
            currentCustomer.totalMoney += amount;
        } else {
            currentCustomer.totalMoney = amount;
            currentCustomer.transactions = [];
        }

        currentCustomer.transactions.push(
            `${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`
        );

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let currentCustomer = this.getCustomerById(personalId);

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            currentCustomer.totalMoney -= amount;
            currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
        }

        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let currentCustomer = this.getCustomerById(personalId);

        let output = `Bank name: ${this._bankName}\nCustomer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${currentCustomer.totalMoney}$\n`

        if (currentCustomer.transactions.length > 0) {
            output += 'Transactions:\n';
            for (let i = currentCustomer.transactions.length; i > 0; i--) {
                output += `${i}. ${currentCustomer.transactions[i - 1]}\n`;
            }
        }
        return output.trim();
    }

    getCustomerById(personalId) {

        let currentCustomer = this.allCutomers.find(
            (customer) => customer.personalId === personalId
        );

        if (!currentCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        return currentCustomer;
    }
}



let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 6233267
}));
console.log(bank.newCustomer({
    firstName: 'Mihaela',
    lastName: 'Mileva',
    personalId: 4151596
}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
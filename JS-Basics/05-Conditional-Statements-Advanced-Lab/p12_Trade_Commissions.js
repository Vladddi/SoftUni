function tradeCommissions(input) {
    let city = input[0];
    let number = Number(input[1]);
    let bonus = 0;

    switch (city) {
        case 'Sofia':
            if (number >= 0 && number <= 500) {
                bonus = number * 0.05;
            } else if (number > 500 && number <= 1000) {
                bonus = number * 0.07;

            } else if (number > 1000 && number <= 10000) {
                bonus = number * 0.08;

            } else {
                bonus = number * 0.12;
            }
            break;
        case 'Varna':
            if (number >= 0 && number <= 500) {
                bonus = number * 0.045;
            } else if (number > 500 && number <= 1000) {
                bonus = number * 0.075;

            } else if (number > 1000 && number <= 10000) {
                bonus = number * 0.1;

            } else {
                bonus = number * 0.13;
            }
            break;
        case 'Plovdiv':
            if (number >= 0 && number <= 500) {
                bonus = number * 0.055;
            } else if (number > 500 && number <= 1000) {
                bonus = number * 0.08;

            } else if (number > 1000 && number <= 10000) {
                bonus = number * 0.12;

            } else {
                bonus = number * 0.145;
            }
            break;
        default:
            break;
    }

    if (bonus <= 0) {
        console.log('error');
    } else {
        console.log(bonus.toFixed(2));
    }
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
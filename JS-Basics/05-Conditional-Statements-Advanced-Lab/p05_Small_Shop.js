function smallShop(input) {
    let articul = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let bill = 0;

    switch (city) {
        case 'Sofia':
            if (articul == 'coffee') {
                bill = quantity * 0.50;
            } else if (articul == 'water') {
                bill = quantity * 0.80;

            } else if (articul === 'beer') {
                bill = quantity * 1.20;

            } else if (articul == 'sweets') {
                bill = quantity * 1.45;

            } else if (articul == 'peanuts') {
                bill = quantity * 1.60;

            } else {};
            break;
        case 'Plovdiv':
            if (articul == 'coffee') {
                bill = quantity * 0.40;
            } else if (articul == 'water') {
                bill = quantity * 0.70;

            } else if (articul === 'beer') {
                bill = quantity * 1.15;

            } else if (articul == 'sweets') {
                bill = quantity * 1.30;

            } else if (articul == 'peanuts') {
                bill = quantity * 1.50;

            } else {};
            break;
        case 'Varna':
            if (articul == 'coffee') {
                bill = quantity * 0.45;
            } else if (articul == 'water') {
                bill = quantity * 0.70;

            } else if (articul === 'beer') {
                bill = quantity * 1.10;

            } else if (articul == 'sweets') {
                bill = quantity * 1.35;

            } else if (articul == 'peanuts') {
                bill = quantity * 1.55;

            } else {};
            break;
    }
    console.log(bill);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);
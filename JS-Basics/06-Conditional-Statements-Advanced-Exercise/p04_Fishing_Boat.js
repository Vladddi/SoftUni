function fishingBoat(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let countFishermans = Number(input[2]);

    let rentPrice = 0;
    let discount = 0;

    if (season == 'Spring') {
        rentPrice = 3000;
        if (countFishermans <= 6) {
            discount += rentPrice * 0.1;
        } else if (countFishermans <= 11) {
            discount += rentPrice * 0.15;
        } else if (countFishermans > 12) {
            discount += rentPrice * 0.25;
        }
        rentPrice -= discount;
        if (countFishermans % 2 == 0) {
            rentPrice = rentPrice - (rentPrice * 0.05);
        }

    } else if (season == 'Summer') {
        rentPrice = 4200;
        if (countFishermans <= 6) {
            discount += rentPrice * 0.1;
        } else if (countFishermans <= 11) {
            discount += rentPrice * 0.15;
        } else if (countFishermans > 12) {
            discount += rentPrice * 0.25;
        }
        rentPrice -= discount;
        if (countFishermans % 2 == 0) {
            rentPrice = rentPrice - (rentPrice * 0.05);
        }

    } else if (season == 'Autumn') {
        rentPrice = 4200;
        if (countFishermans <= 6) {
            discount += rentPrice * 0.1;
        } else if (countFishermans <= 11) {
            discount += rentPrice * 0.15;
        } else if (countFishermans > 12) {
            discount += rentPrice * 0.25;
        }
        rentPrice -= discount;

    } else if (season == 'Winter') {
        rentPrice = 2600;
        if (countFishermans <= 6) {
            discount += rentPrice * 0.1;
        } else if (countFishermans <= 11) {
            discount += rentPrice * 0.15;
        } else if (countFishermans > 12) {
            discount += rentPrice * 0.25;
        }
        rentPrice -= discount;
        if (countFishermans % 2 == 0) {
            rentPrice = rentPrice - (rentPrice * 0.05);
        }
    }

    if (buget >= rentPrice) {
        console.log(`Yes! You have ${(buget - rentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentPrice - buget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
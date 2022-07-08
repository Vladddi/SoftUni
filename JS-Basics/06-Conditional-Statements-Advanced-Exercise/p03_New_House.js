function newHouse(input) {
    //----Input-------------
    let typeFlower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    //-----table----price---per---one--flower----
    let rosePrice = 5;
    let dahliaPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;


    let currentPrice = 0;
    let totalPrice = 0;
    let discount = 0;
    //------TODO---------logic-------
    switch (typeFlower) {
        case 'Roses':
            currentPrice = countFlowers * rosePrice;
            if (countFlowers > 80) {
                discount = currentPrice * 0.1;
            }
            totalPrice = currentPrice - discount;
            break;
        case 'Dahlias':
            currentPrice = countFlowers * dahliaPrice;
            if (countFlowers > 90) {
                discount = currentPrice * 0.15;
            }
            totalPrice = currentPrice - discount;
            break;
        case 'Tulips':
            currentPrice = countFlowers * tulipsPrice;
            if (countFlowers > 80) {
                discount = currentPrice * 0.15;
            }
            totalPrice = currentPrice - discount;
            break;
        case 'Narcissus':
            currentPrice = countFlowers * narcissusPrice;
            if (countFlowers < 120) {
                discount = currentPrice * 0.15;
            }
            totalPrice = currentPrice + discount;
            break;
        case 'Gladiolus':
            currentPrice = countFlowers * gladiolusPrice;
            if (countFlowers < 80) {
                discount = currentPrice * 0.20;
            }
            totalPrice = currentPrice + discount;
            break;
    }

    // ----output-----------
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
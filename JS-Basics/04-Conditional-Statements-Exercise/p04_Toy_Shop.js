function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let countPuzzels = Number(input[1]); //2.60
    let countDoll = Number(input[2]); //3
    let countTedybear = Number(input[3]); //4.10
    let countMinions = Number(input[4]); //8.20
    let countTrucks = Number(input[5]); //2

    let totalCount = countPuzzels + countDoll + countTedybear + countMinions + countTrucks;

    let totalAmount = (countPuzzels * 2.60) + (countDoll * 3) + (countTedybear * 4.10) +
        (countMinions * 8.20) + (countTrucks * 2);

    let discount = 0;
    if (totalCount >= 50) {
        discount = totalAmount * 0.25;
    }
    //--discount-----
    totalAmount -= discount;
    //--rent-------
    totalAmount -= (totalAmount * 0.1);


    //---money-left------
    if (totalAmount >= priceExcursion) {
        console.log(`Yes! ${(totalAmount - priceExcursion).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceExcursion - totalAmount).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320","8","2","5","5","1"]);
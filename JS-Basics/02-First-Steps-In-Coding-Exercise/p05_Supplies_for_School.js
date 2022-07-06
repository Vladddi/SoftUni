function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let pricePerPens = pens * 5.80;
    let markers = Number(input[1]);
    let pricePerMarkers = markers * 7.20;
    let detergent = Number(input[2]);
    let priceDetergentPerLiter = detergent * 1.20;
    let percentDiscount = Number(input[3]) / 100;

    let neededMoney = pricePerPens + pricePerMarkers + priceDetergentPerLiter;
    let moneyWithDiscount = neededMoney - (neededMoney * percentDiscount);

    console.log(moneyWithDiscount);
}

suppliesForSchool(["2 ","3 ","4 ","25 "]);
suppliesForSchool(["4 ","2 ","5 ","13 "]);
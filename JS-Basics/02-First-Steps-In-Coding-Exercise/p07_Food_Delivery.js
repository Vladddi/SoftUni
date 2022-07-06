function foodDelivery(input) {
    let chikenMenuCount = Number(input[0]);
    let chikenMenuPrice = (chikenMenuCount * 10.35).toFixed(2);
    let fishMenuCount = Number(input[1]);
    let fishMenuPrice = (fishMenuCount * 12.40).toFixed(2);
    let veganMenuCount = Number(input[2]);
    let veganMenuPrice = (veganMenuCount * 8.15).toFixed(2);

    let pricePerAllMenus = Number(chikenMenuPrice) + Number(fishMenuPrice) + Number(veganMenuPrice);
    let desertPrice = pricePerAllMenus * 0.2;
    let foodDelivery = 2.50;
    let totalPrice = pricePerAllMenus + desertPrice + foodDelivery;

    console.log(totalPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
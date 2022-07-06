function petShop(input) {

    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;
    let totalSum = dogFood + catFood;

    console.log(`${totalSum} lv.`);
}

petShop(["5", "4"]);

petShop(["13", "9"]);
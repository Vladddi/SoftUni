function fruit([arg1, arg2, arg3]) {
    let fruit = arg1;
    let weight = parseInt(arg2);
    let price = parseFloat(arg3);
    const weightInKg = (weight / 1000).toFixed(2);

    const moneyNeeded = (weightInKg * price).toFixed(2);

    console.log(`I need $${moneyNeeded} to buy ${weightInKg} kilograms ${fruit}.`)

}
fruit(['orange', 2500, 1.80]);
fruit(['apple', 1563, 2.35]);
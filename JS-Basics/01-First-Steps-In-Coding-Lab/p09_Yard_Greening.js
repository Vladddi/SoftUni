function yardGreening(input) {
    let sqm = Number(input[0]);
    let sumPerSqm = sqm * 7.61;
    let discount = sumPerSqm * 0.18;
    let totalSum = sumPerSqm - discount;

    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);
function circleArea(agrument) {
    let result;
    let argumentType = typeof (agrument);

    if (argumentType === "number") {
        result = Math.pow(agrument, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`)
    }
}

circleArea(5);
circleArea('name');
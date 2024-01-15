function smallestTwoNumber(arr) {
 
    let result = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (i < 2) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

smallestTwoNumber([30, 15, 50, 5]);
smallestTwoNumber([3, 0, 10, 4, 7, 3]);
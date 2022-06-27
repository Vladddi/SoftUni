function biggestElement(matrix) {
    // let biggestNumber = Number.MIN_VALUE;
    // for (const row of matrix) {
    //     for (const col of row) {
    //         if (col >= biggestNumber) {
    //             biggestNumber = col;
    //         }
    //     }
    // }
    // console.log(biggestNumber);


    let marged = [].concat.apply([], matrix);
    let maxNumber = Math.max.apply(null, marged);
    console.log(maxNumber);  
}

biggestElement([[20, 50, 10],
[8, 33, 145]]
);

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);
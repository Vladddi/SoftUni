function solve(arr) {
    let rowSums = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let sum = arr.reduce((result, curr) => (result + curr), 0);
        rowSums.push(sum);
        
    }

    for (let i = 0; i < arr.length; i++)
    return rowSums;
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))

//транспониране на матрица
function aggregateElements(arr) {
    const sumArr = arr.reduce((a, b) => a + b);
    
    let inverseArr = 0;

    for (let i = 0; i < arr.length; i++) {
        inverseArr += 1 / arr[i];
    }

    const concatArr = arr.join('');
    console.log(sumArr);
    console.log(inverseArr);
    console.log(concatArr);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

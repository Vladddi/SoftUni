//function oddPositionsCoubleAndReturn(numbers) {
    // let oddPositions = [];

    // for (let index = 1; index < numbers.length; index+=2) {
    //         oddPositions.push(numbers[index] * 2); 
    // }
    // return oddPositions.reverse();

    // const oddNums = numbers.filter((v, i) => i % 2 == 1);
    // const doubled = oddNums.map(x => x * 2);
    // doubled.reverse();

 
    // console.log(numbers
    //     .filter((v, i) => i % 2 == 1)
    //     .map(x => x * 2)
    //     .reverse().join(' '));

//}

const solve = (numbers) => numbers
    .filter((v, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse().join(' ');

    
console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));

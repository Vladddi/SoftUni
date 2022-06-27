function smallestTwoNumbers (numbers) {

let sortedArray = numbers.sort((a,b) => a - b);
let firstElOfArray = sortedArray[0];
let secondElOfArray = sortedArray[1];

console.log(firstElOfArray + ' ' + secondElOfArray);

}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
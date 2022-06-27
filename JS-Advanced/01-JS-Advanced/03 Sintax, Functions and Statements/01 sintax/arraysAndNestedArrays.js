const myArr = [10, 20, 30, 40, 50, 60, 70];

// console.log(myArr.length);
// myArr[myArr.length] = 67;
// console.log(myArr[1]);
// console.log(myArr[5]);
// console.log(myArr[0]);
// console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//     console.log(`[${i}] -> ${myArr[i]}`);
// }

for (let item of myArr) {
    console.log(item);
}
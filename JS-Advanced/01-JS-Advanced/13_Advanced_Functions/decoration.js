// function pow(a, b) {

//     return Math.pow(a, b);
// }

// const sqr = (a) => pow(a, 2);
// const cube = (a) => pow(a, 3);
function pow(power, num) {

    return Math.pow(num, power);
}

const sqr = pow.bind(null, 2);
const cube = pow.bind(null, 3);

// console.log(pow(2, 2));
// console.log(pow(3, 2));
// console.log(pow(4, 2));
// console.log(pow(5, 2));

console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(4));
console.log(sqr(5));
function getFibonator() {
    let number1 = 0;
    let number2 = 1;

    function getNumber() {
        let nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        return number1;
    }
    return getNumber;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
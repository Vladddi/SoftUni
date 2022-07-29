function add(num) {
    let sum = num;

    function increase(num2) {
        sum += num2;
        return increase;
    }

    increase.toString = () => {
        return sum;
    }
    return increase;
}

console.log(add(4)(3).toString());
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
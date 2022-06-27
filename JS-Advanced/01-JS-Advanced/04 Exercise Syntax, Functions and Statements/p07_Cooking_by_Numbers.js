function solve(num, com1, com2, com3, com4, com5) {
    let number = +num;

    const arr = [com1, com2, com3, com4, com5];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.8; break;
        }
        console.log(number);
    }
}

console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'))
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'))

function solve(arr, rotations) {
    
let circle = rotations % arr.length;

    for (let i = 0; i < circle; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
// function solve(arr, rotations) {
//     for (let i = 0; i < rotations; i++) {
//         const element = arr.pop();
//         arr.unshift(element);
//     }

//     return arr.join(' ');
// }

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));

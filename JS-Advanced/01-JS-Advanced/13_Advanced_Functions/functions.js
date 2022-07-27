// function createIncremeter() {
//     function increment(a) {
//         return a + 1;
//     }

//     return increment;
// }

// const myIncremeter = createIncremeter();

// console.log([1, 2, 3].map(myIncremeter));

////////////////////////////////////
///PURE///Functions//////////

let counter = 0;

function increment(a) {
    counter += a;
    console.log(counter);
}

function pureIncrement(a) {
    console.log(a + 1);
}

increment(2); //2
increment(2); //4
increment(2); //6
increment(2); //8
increment(2); //10

pureIncrement(2); //3
pureIncrement(2); //3
pureIncrement(2); //3
pureIncrement(2); //3
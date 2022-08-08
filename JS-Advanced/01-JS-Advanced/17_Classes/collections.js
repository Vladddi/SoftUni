const myMap = new Map();

console.log(myMap);

myMap.set('firstKey', 5);
myMap.set('secondKey', 3);

//obhojdane
// for (let item of myMap) { //tupel  //for of -> entries
//     console.log(item); //['firstKey', 5] //['secondKey', 3]
// }

for (let [key, value] of myMap) { //tupel  //for of -> entries
    console.log(key, value); //firstKey 5 //secondKey 3
}

const entries = myMap.entries();
const keys = myMap.keys();
const values = myMap.values();

console.log(keys); // [Map Iterator] { 'firstKey', 'secondKey' }
console.log(values); // [Map Iterator] { 5, 3 }


// console.log([...entries]);
console.log(Array.from(entries)); //[ [ 'firstKey', 5 ], [ 'secondKey', 3 ] ]



// console.log(myMap);

// myMap.set('firstKey', 8);

// console.log(myMap);

// console.log(myMap.get('secondKey'));

// console.log(myMap.has('firstKey')); //true
// console.log(myMap.has('thirdKey')); //false

// myMap.delete('firstKey');

// console.log(myMap.size); //1 like a lenght
// myMap.clear();
// console.log(myMap.size); //0 like a lenght

//======================================================
//----------Map sorting----------
console.log('----------Map sorting----------');
let map = new Map();
map.set('one', 1);
map.set('eight', 8);
map.set('two', 2);
let sorted = Array.from(map.entries())
.sort((a,b) => a[1] - b[1]);

for(let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}


Array.from(myMap).filter(([key,value]) => value > 5);
Array.from(myMap).filter(item => item[1] > 5);

//=======================================
//------Set------

let set = new Set([1, 2, 2, 4, 5])
// Set{4} {1, 2, 4, 5}
set.add(7); //Add value
console.log(set.has(1));
// Expected output: true
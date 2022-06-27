const myPerson = {
    name: 'Peter',
    lastName: 'Jackson',
    age: 23,
    sayHi: function () {
        console.log('Hello!');
    }
};

myPerson.sayHi();

// for(const key in myPerson) {
//     console.log(`${key} -> ${myPerson[key]}`);
// }

// const keys = Object.keys(myPerson);
// const values = Object.values(myPerson);
// const entries = Object.entries(myPerson);

// console.log(keys);
// console.log(values);
// console.log(entries);

// console.log(myPerson);

// console.log(myPerson.age);

// myPerson.age = 24;

// console.log(myPerson);

// const propName = 'name';

// console.log(myPerson[propName]);

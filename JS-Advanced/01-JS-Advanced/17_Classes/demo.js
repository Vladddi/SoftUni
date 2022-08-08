class Person {
    constructor(name, age = 18, secret) {
        this.name = name;
        this.age = age;
        
        
        //prwiligirowana function
        this.secretField = () => secret;
    
    }


    sayHello() {
        console.log(`${this.name} says hi! I am ${this.age} years old.`);
    }


    //static method
    static cheer() {
        console.log('Woo hoo!'); //Woo hoo!
        console.log(this); //[class Person]
        console.log(this.someStaticMethod()); //5
    }

    static someStaticMethod() {
        return 5;
    }
    
    static compareTo (a,b) {
        return a.age - b.age;
    }
}



const person1 = new Person('Peter', 23, 'secret message');
const person2 = new Person('George');
const person3 = new Person('Mary', 21);

console.log(person1.secretField());

person1.height = 178;

console.log(person1);
console.log(person2);

person1.sayHello();
Person.cheer();

const people = [person1, person2, person3];

people.sort(Person.compareTo);
console.log(people); //[p2, p3, p1]


// person1.sayHello();
// person2.sayHello();

// console.log(person1.sayHello == person2.sayHello); //true

// console.log(person1 instanceof Person); //true
// console.log(person1 instanceof Object); //true
// console.log(person1 instanceof Number); //false


// const myLiteral = {
//     name: 'Peter',
//     age: 19,
//     sayHello() {
//         console.log(`${this.name} says hi! I am ${this.age} years old.`);
//     }
// };
// console.log(myLiteral instanceof Person); //false
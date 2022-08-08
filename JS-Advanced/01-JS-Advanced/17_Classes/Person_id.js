class Person {

    constructor(firstName, lastName, age, email) {
        Object.assign(this, {
            id: Person.getNextId(),
            firstName,
            lastName,
            age,
            email, 
            lambda: () => console.log(this) //
        });
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        //return 'overriden method';
    }

    static getNextId() {
        return nextId++;
    }
}
let nextId = 0;

const guy1 = new Person('John', 'Smith', 32, 'john@smith.com');
const guy2 = new Person('Mary', 'Smith', 31, 'john@smith.com');
const guy3 = new Person('Alex', 'Smith', 33, 'john@smith.com');
const guy4 = new Person('Peter', 'Smith', 35, 'john@smith.com');

console.log(guy1);
console.log(guy2);
console.log(guy3);
console.log(guy4);
class Person {
    constructor (firstName, lastName, age, email) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = Number(age);
        // this.email = email;
        Object.assign(this, {
            firstName,
            lastName,
            age,
            email
        });
    }

    toString() {
         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        //return 'overriden method';
    }
}

const guy = new Person('John', 'Smith', 32, 'john@smith.com');

console.log(guy);
console.log(guy.toString());
console.log('' + guy); //overridden method
console.log(`${guy}`); //overridden method

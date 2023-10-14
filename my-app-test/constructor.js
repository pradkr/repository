'use strict';

const Person = function (firstname, lastname, age, email) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.email = email;
    this.introduction = () => `${this.firstName} is ${this.age} years old`;
    this.canDrive = () => (this.age >= 18 ? 'Yes' : 'No');
};

const Joe = new Person('Joe', 'Mason', 17, 'joe.m@mycorp.com');
console.log(Joe.introduction());
console.log(`Can the user drive? ${Joe.canDrive()}`);

const Jane = new Person('Jane', 'Mandenga', 28, 'jane@mycorp.com');
console.log(Jane.introduction());
console.log(`Can the user drive? ${Jane.canDrive()}`);


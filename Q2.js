const person1 = {
    name: 'Raghav',
    age: 19,
    greet: function() {
        return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person1.name)
console.log(person1.age)
console.log(person1.greet())

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person2 = new Person('Harsh', 25);

console.log(person2.name)
console.log(person2.age)
console.log(person2.greet())


const person3 = Object.create(null);
person3.name = 'Yash';
person3.age = 20;
person3.greet = function() {
    return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

console.log(person3.name)
console.log(person3.age)
console.log(person3.greet())


class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person4 = new Person4('Kaushik', 35);

console.log(person4.name)
console.log(person4.age)
console.log(person4.greet())

var person5 = new Object();
person5.name = 'Raj';
person5.age = 40;
person5.greet = function() {
    return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

console.log(person5.name)
console.log(person5.age)
console.log(person5.greet())
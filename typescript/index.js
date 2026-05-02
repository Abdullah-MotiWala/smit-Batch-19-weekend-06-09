"use strict";
// let a1:number = 1;
// a1 = 5
// // const a2 = 1
let a1 = 1;
let a2 = "name";
let a3 = true;
let a4 = undefined;
let a5 = null;
// let a6: [string, string, string, number] = ["", "", "", 5];
// a6.push(5);
let a7 = [{ name: "abdullah", age: 25 }];
let a8 = { name: "abc" };
const myFoo = (a, b) => {
    if (b) {
        const value = a + b;
    }
    console.log(a);
    return 123;
};
// a1.toString()
myFoo(1);
function myFoo2(a) {
    console.log(a);
    return 0;
}
let a10 = { a: "A" };
function allCourses(course) {
    console.log(course);
}
allCourses();
// let a = 1;
// a = "one";
let a = 1;
let b = "one";
let c = true;
let d = undefined;
let e = null;
const student1 = {
    name: "abc",
    age: 25,
    rollNo: 123,
};
const student2 = {
    name: "def",
    age: 30,
    rollNo: 456,
};
const students = [student1, student2];
const teacher1 = {
    name: "xyz",
    subject: "math",
    sleep: () => {
        console.log("sleeping");
    },
    eat: () => {
        console.log("eating");
    },
};
const teacher2 = {
    name: "pqr",
    subject: "science",
    sleep: () => {
        console.log("sleeping");
    },
    eat: () => {
        console.log("eating");
    },
};
const teachers = [teacher1, teacher2];
class Animal {
    name;
    age;
    isSleeping = false;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    eat() {
        console.log(`${this.name} is eating and his age is ${this.age}`);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    dogEat() {
        this.eat();
    }
    isPlaying() {
        if (this.isSleeping) {
            console.log(`${this.name} is sleeping and can't play`);
        }
        else {
            console.log(`${this.name} is playing`);
        }
    }
}
const dog1 = new Dog("Dog", 5);
dog1.dogEat();
dog1.isPlaying();
// const animal1 = new Animal("Dog", 5);
// animal1.sleep();
// animal1.eat();
// console.log(animal1.name,animal1.age);
// class Cat extends Animal {
// }
// Cat is an animal,
// animan is a cat
// Inheritance
// Abstraction
// Polymorphism
// Encapsulation

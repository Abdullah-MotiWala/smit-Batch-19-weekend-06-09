// let a1:number = 1;

// a1 = 5

// // const a2 = 1

let a1: number = 1;
let a2 = "name";
let a3: boolean = true;
let a4: undefined = undefined;
let a5: null = null;
// let a6: [string, string, string, number] = ["", "", "", 5];
// a6.push(5);
let a7: { name: string; age: number }[] = [{ name: "abdullah", age: 25 }];
let a8: { name: string } = { name: "abc" };

const myFoo: (a: number, b?: number) => number = (a, b) => {
  if (b) {
    const value = a + b;
  }
  console.log(a);
  return 123;
};

// a1.toString()

myFoo(1);

function myFoo2(a: string) {
  console.log(a);
  return 0;
}

// let a4: "user" = "asdf";
// const a5 = "user"

interface myInterface {
  a: string;
}

interface myInterfaceParent extends myInterface {
  b: string;
}
type myType = { a: string };

let a10: myType = { a: "A" };

interface baseListing {
  search: number;
  page: number;
  limit: number;
}

interface user extends baseListing {
  department: string;
}

interface attendence extends baseListing {
  studentId: string;
  absent: boolean;
}

interface course extends baseListing {
  classId: number;
  minReview: number;
}

function allCourses(course?: course) {
  console.log(course);
}

allCourses();

// let a = 1;
// a = "one";

let a: number = 1;
let b: string = "one";
let c: boolean = true;
let d: undefined = undefined;
let e: null = null;

// let f: [string, number] = ["one", 1];
// f.push(true);
// let g: number[] = [1];
// g.push(2);
// g.push("");

// let h: { name: string; fatherName: string }[] = [];

// let i: { name: string; fatherName: string; rollNo?: number } = {
//   name: "abc",
//   fatherName: "def",
// };

// i.rollNo = 5;
// i.isMarried = false;

// if (i.rollNo) {
//   i.rollNo++;
// }

// function myFunc(a: number, b: unknown): number | undefined {
//   // if (b) {
//   const value = a + (b as number);
//   return value;
//   // }
//   // return 0;
// }

// const k = myFunc(1, 2);
// const l = (a: number, b: number): number => {
//   return 0;
// };
// const m: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };

type Student = {
  name: string;
  age: number;
  rollNo: number;
};

const student1: Student = {
  name: "abc",
  age: 25,
  rollNo: 123,
};
const student2: Student = {
  name: "def",
  age: 30,
  rollNo: 456,
};

const students: Student[] = [student1, student2];

interface BaseHuman {
  sleep: () => void;
  eat: () => void;
}

interface Teacher extends BaseHuman {
  name: string;
  subject: string;
}

interface Student1 extends BaseHuman {
  name: string;
  age: number;
  rollNo: number;
}

const teacher1: Teacher = {
  name: "xyz",
  subject: "math",
  sleep: () => {
    console.log("sleeping");
  },
  eat: () => {
    console.log("eating");
  },
};
const teacher2: Teacher = {
  name: "pqr",
  subject: "science",
  sleep: () => {
    console.log("sleeping");
  },
  eat: () => {
    console.log("eating");
  },
};
const teachers: Teacher[] = [teacher1, teacher2];

// class Animal {
//   name: string;
//   private age: number;
//   protected isSleeping: boolean = false;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }
//   eat() {
//     console.log(`${this.name} is eating and his age is ${this.age}`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }

//   sleep(){
//     console.log(`${this.name} is sleeping`);
//   }

//   dogEat() {
//     this.eat();
//   }
//   isPlaying() {
//     if (this.isSleeping) {
//       console.log(`${this.name} is sleeping and can't play`);
//     } else {
//       console.log(`${this.name} is playing`);
//     }
//   }
// }

// const dog1 = new Dog("Dog", 5);
// // dog1.isSleeping

// dog1.dogEat();
// dog1.isPlaying();

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

abstract class Animal {
  constructor(public name: string) {}

  // Abstract method (no implementation)
  abstract makeSound(): void;

  // Regular method
  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Bark
dog.move(); // Buddy is moving

// **1. Encapsulation**
// Keeping data and methods together in one class and restricting direct access to them.
// 👉 Like a capsule — data is protected inside.

// **2. Abstraction**
// Hiding complex details and showing only what is necessary.
// 👉 You use something without knowing how it works inside.

// **3. Inheritance**
// One class can reuse properties and methods of another class/parent class.
// 👉 Like a child inheriting features from parents.

// **4. Polymorphism**
// Same method or function behaving differently in different situations but in its just support overriding.
// 👉 One name, multiple behaviors.

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

console.log("hello world");
const array = [1, 2, 3, 4, 5];

// array.reverse()
const reversedArray = array.toReversed();
console.log(array);
console.log(reversedArray);

const resutl = array.reduce(function (acc, ele) {
  console.log(acc, ele);
  return acc * ele;
});
console.log(resutl);

const newString = array.join("-");
console.log(newString, "===newString");
// for (const element of array) {
//   console.log(element);
// }
// function mapFN(ele) {
//   console.log(ele);
// }
// array.map(mapFN);
// mapFN(1, 0, array);
// function myCustomMap(callbackFN) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const result = callbackFN(this[i], i, this);
//     newArray.push(result);
//   }
//   return newArray;
// }

const newArr = array.map(function (ele) {
  console.log(ele, "===ele");
  return ele + 1;
});

array.forEach(function (ele) {
  console.log(ele, "===ele");
});

const filteredArray = array.filter(function (ele) {
  return ele % 2 === 0;
});

// array.copyWithin(2, 0, 2);

console.log(array, newArr, filteredArray, "===array");

const studentSubjectReport = [
  {
    subject: "Maths",
    isPassed: true,
  },
  {
    subject: "Science",
    isPassed: true,
  },
  {
    subject: "English",
    isPassed: true,
  },
];

// const isPassed = studentSubjectReport.every(function (ele) {
//   return ele.isPassed === true;
// });

// console.log(isPassed);
const failedSubject = studentSubjectReport.find(function (ele) {
  return ele.isPassed === true;
});
console.log(failedSubject, "===failedSubject");

const failedSubjectInd = studentSubjectReport.findIndex(function (ele) {
  return ele.isPassed === false;
});

const failedSubjectLastInd = studentSubjectReport.findLastIndex(function (ele) {
  return ele.isPassed === true;
});
const isMathIncluded = studentSubjectReport.some(function (ele) {
  return ele.subject === "Maths";
});
console.log(
  failedSubject,
  failedSubjectInd,
  failedSubjectLastInd,
  isMathIncluded,
  "===failedSubject",
);

// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newReturnedArr = newArray.fill("A", 0, 5);
// console.log(newArray, "===newArray");
// console.log(newReturnedArr, "===newReturnedArr");

const arr1 = [0, [1, 2, [3, 4]]];
const flatArr1 = arr1.flat(2);
console.log(arr1, flatArr1, "===flat");

// const result = flatArr1.includes(6)
// console.log(result,"===res")

const fullname = "Rahul Kumar";
// const greetings = "Hello, " + fullname + "!";
const greetings = `Hello, \${}\ ${fullname}!`;
console.log(greetings, "===greetings");

// function foo(){} //conventional function
// function (){} //annonymous function
// (function () {})(); //IIFE Immediate Invoke Function Expression
// const myFoo = ()=>{} // (Fat) Arrow function
(number, index) => {
  return number * 2;
};

(number) => number * 2;
(number) => {
  number * 2;
};

// console.log(a);
// debugger;
// let a = 1;

// myFoo();
// function myFoo() {
//   console.log("Hello World");
// }

const myObject = {
  name: "Abdullah",
  age: 25,
  surname: "Motiwala",
};

const myObj2 = {
  ...myObject,
  a: 1,
};
console.log(myObj2);

// const name = myObject.name;
// const age = myObject.age;
// const surname = myObject.surname;

// const { name, age: personAge } = myObject;
// console.log(name, personAge);

const myArray = [1, 2, 3, 4, 5];
// const [first,second,third,,__] = myArray;

// myArray.push(12,1,35)
// function myFoo(...otherDetails,name, surname, ) {
//   console.log(name, surname, otherDetails);
// }

// myFoo("Abdullah", "Motiwala", 25, "Male", "Engineer");

const myArray2 = [1, ...myArray, 5];
console.log(myArray2);

// // let a =  ...myArray
// function myFoo2(gender = "others", name) {
//   // if(gender){
//   //   gender = "others"
//   // }
//   console.log(name, gender);
// }

// myFoo2(undefined, "Male");

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// function processUserInput(callback) {

//   // simulate delay (like fetching data)
//   setTimeout(function () {
//     const name = "Ali";
//     callback(name); // calling the callback
//   }, 2000);
// }

// processUserInput(greet);

function scoreWrapper() {
  let score = 0;

  function updateScore() {
    return ++score;
  }
  return updateScore;
}
const updateScore = scoreWrapper();
const score1 = updateScore();
const score2 = updateScore();
console.log(score1, score2, "===score");

const myMap = new Map();
myMap.set(true, "Boolean true");
myMap.set(false, "Boolean false");
myMap.set("name", "Abdullah");
myMap.set("age", 25);
console.log(myMap.get("name"));

const duplicatedArray = [1, 2, 3, 4, 5, 1, 2];
const uniqueArray = [...new Set(duplicatedArray)];
console.log(uniqueArray);
// const mySet = new Set();
// mySet.add(1);
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet)

// function myFunction() {
//   console.log(this, "Hello, World!");
// }

// myFunction();
const myObj = {
  name: "Abdullah",
  myFunction: function (greetMessage, greetMessage2) {
    console.clear();
    console.log(this, greetMessage, greetMessage2);
  },
};

// myObj.myFunction.call({ fname: "Ali" }, "Hello, Ali!", "How are you?");

// myObj.myFunction.apply({ fname: "Ali" }, ["Hello, Ali!", "How are you?"]);

const newFun = myObj.myFunction.bind(
  { fname: "Ali" },
  "Hello, Ali!",
  "How are you?",
);
newFun();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User("Abdullah", 25);
// console.log(user1);

// new Array(5)
// new String("Hello, World!")

class Car {
  constructor(
    brand,
    model,
    year,
    color,
    fuelType,
    speed = 0,
    isRunning = false,
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelType = fuelType;
    this.speed = speed;
    this.isRunning = isRunning;
  }

  startEngine() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} engine started 🚗`);
  }

  stopEngine() {
    this.isRunning = false;
    console.log(`${this.brand} ${this.model} engine stopped 🛑`);
  }

  accelerate(increase) {
    this.speed += increase;
    console.log(`${this.brand} speed is now ${this.speed} km/h`);
  }

  displayInfo() {
    console.log(`
      Car Info:
      Brand: ${this.brand}
      Model: ${this.model}
      Year: ${this.year}
      Color: ${this.color}
      Fuel: ${this.fuelType}
      Speed: ${this.speed}
      Running: ${this.isRunning}
    `);
  }
}

// instatiate: creating the instance(object) of the class
const myCar = new Car("Toyota", "Camry", 2020, "Red", "Gasoline");

myCar.startEngine();
myCar.accelerate(50);
myCar.displayInfo();
myCar.stopEngine();

const myFrndCar = new Car("Honda", "Civic", 2019, "Blue", "Gasoline");

myFrndCar.startEngine();
myFrndCar.accelerate(10);
myFrndCar.displayInfo();
myFrndCar.stopEngine();

// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 0);
// console.log("3");

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// function processUserInput(cb) {
//   setTimeout(function () {
//     const name = "Abdullah";
//     cb(name)
//   }, 2000);

//   return name;
// }

// processUserInput(greet);

// function getIngredients(callback) {
//   setTimeout(() => {
//     console.log("Got ingredients");
//     callback();
//   }, 1000);
// }

// function chopVegetables(callback) {
//   setTimeout(() => {
//     console.log("Chopped vegetables");
//     callback();
//   }, 1000);
// }

// function cookFood(callback) {
//   setTimeout(() => {
//     console.log("Cooked food");
//     callback();
//   }, 1000);
// }

// function serveDinner() {
//   setTimeout(() => {
//     console.log("Dinner is served!");
//   }, 1000);
// }

// getIngredients(function () {
//   chopVegetables(function () {
//     cookFood(serveDinner);
//   });
// });

const myPromise = new Promise((resolve, reject) => {
  const isBusAvailable = true;
  setTimeout(() => {
    if (isBusAvailable) {
      resolve({ name: "abdullah" });
    } else {
      reject({ error: "Something not working" });
    }
  }, 5000);
});

myPromise
  .then((value) => {
    console.log(value);
    console.log("Hey I'm here");
  })
  .catch((error) => {
    console.log(error);
    console.log("I can't made it");
  });

console.log("abc");

function getIngredients() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got ingredients");
      resolve("Ingredients ready");
    }, 1000);
  });
}

function cookFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cooked food");
      resolve("Food cooked");
    }, 1000);
  });
}

function serveDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Dinner served");
      resolve("Dinner is ready!");
    }, 1000);
  });
}

// async function makeDinner() {
//   try {
//     const ingredients = await getIngredients();
//     console.warn(ingredients);

//     const food = await cookFood();
//     console.log(food);

//     const dinner = await serveDinner();
//     console.log(dinner);

//     console.log("Enjoy your meal!");
//   } catch (error) {
//     console.error("Something went wrong:", error);
//   }
// }

// makeDinner();

// setTimeout(() => {
//   debugger;
// }, 5000);

// function abc(){
//   abc()
// }

// abc()
// function abc() {
//   function def() {
//     debugger;
//   }

//   def();
//   debugger;
// }

// abc();

// abc()

// debugger;

// var b = 2
// let a = 1;


// DYNAMIC TYPED LANGUAGE
let a = 1;
a = "abc"
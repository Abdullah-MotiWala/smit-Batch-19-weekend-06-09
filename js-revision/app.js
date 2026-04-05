// alert("Hi");

// Premitive DataTypes
var firstName = "Abdullah";
var age = 24;
var isParent = false;
var netWorth = undefined;
var medicine = null;

// var newAge = age + 25;
age = age + 25;
age += 25;
age++;
++age;

// var newAge = 5 + 6 - "10" + "1"
var newAge = 5 + 6 - 10 + 1;
var isEven = 10 % 2;
console.log(newAge);

var firstName = "Motiwala";
firstName = "Mohd. Abdullah";

// Non Premitive DataTypes
var symptoms = ["ghootne me dard", "sar me dard"];
var lastReport = {
  homoglobin: 140,
  platellets: "1lac50hazar",
};

// var first name : Space not allowed
// var 1stname : start with number not allow, number in between or at at allowed though
// var user&name : special characters other than _ and $ are not allowed
// var var : any reserved keyword of js is not allowed
// var first+last any mathematical sign is not allowed

// var a = 1
// a--
// --a
// console.log(++a)
// console.log(a)
var a = 1;
const result = a + a++ + ++a + a++ + a + ++a;
console.log(result);
// 1 + 1 + 3+3+4 + 5

// var answer = prompt("How're you?","Fine") //always return data in string;

// console.log(answer)

// const isRain = false;
// if (isRain == true) {
//   console.log("Keep Umbrella");
// }

const isTandoorOpen = false;
const isBakeryOpen = true;

// if (isTandoorOpen == true) {
//   console.log("Buy Tandoor-Roti");
// } else if (isBakeryOpen == true) {
//   console.log("Buy Double-Roti");
// } else {
//   console.log("Buy Chapati");
// }
// const con = isTandoorOpen == true
// console.log(con)

// if (!isTandoorOpen) {
//   console.log("Buy Tandoor-Roti");
// } else if (isBakeryOpen) {
//   console.log("Buy Double-Roti");
// } else {
//   console.log("Buy Chapati");
// }

// ===, ==
// <, >, <=, >=

// const age = 24
// if(age<=30){

// }

// if (age>=20){

// }

// if([1,2] == [1,2]){

// }

// if(age === "24"){

// }
const isCourseCompleted = true;
const isPassed = true;

if (isCourseCompleted) {
  if (isPassed) {
    console.log("Certified");
  }
}

if (isCourseCompleted && isPassed) {
  console.log("Certified");
}

const isEntryTestCleared = false;
const isParchi = false;
const isFeesPaid = true;

if (isEntryTestCleared && isParchi && isFeesPaid) {
  console.log("Let him Entre");
}

const myArr = ["a", "b", "c"];

const first = myArr[0];
console.log(first);

myArr.push("d", "e", "f");
const newestLenght = myArr.unshift("0a", "0b");
const removedElem = myArr.splice(2, 2, "0c", "0d");

const popReturned = myArr.pop();
const shiftRemoved = myArr.shift();
const copiedArr = myArr.slice(0, 5);

console.log(myArr, popReturned, shiftRemoved, copiedArr);

// for (let i = 1; i > 0; i++) {
//   if(i === 5){
//     continue;
//   }
//   console.log("2 X " + (i + 1) + " = " + (i + 1) * 2);

//   if (i === 11) {
//     break;
//   }
// }

// const cities = [
//   "NEW YORK",
//   "LONDON",
//   "TOKYO",
//   "PARIS",
//   "SYDNEY",
//   "DUBAI",
//   "TORONTO",
//   "BERLIN",
//   "MOSCOW",
//   "SINGAPORE",
// ];

// const newCities = [];

// for (let i = 0; i < cities.length; i++) {
//   const city = cities[i].toLowerCase();
//   // const lowerCity = city.toLowerCase();
//   newCities.push(city);
// }

// console.log(cities, newCities);

const sentence = "the quick brown the fox jumps over the lazy dog.";
// const newSentence = sentence.replace("quick", "fast");
const newSentence = sentence.replaceAll("the", "A");
console.log(sentence, "\n", newSentence);
// const theIndex = sentence.indexOf("the")
// const theIndex = sentence.lastIndexOf("the")
// console.log(theIndex)

const myNum = 1.5;
// const roundNum = Math.round(myNum);
// const roundNum = Math.floor(myNum);
const roundNum = Math.ceil(myNum);

console.log(myNum, roundNum);

const randomNum = Math.random();
console.log(randomNum);

const stringedNum = "20.5";
// const stringedNum = "abc";
// const stringedNum = +"20"
// const convertedNum = parseInt(stringedNum);
// const convertedNum = Number(stringedNum);
const convertedNum = parseFloat(stringedNum).toFixed(2);

console.log(isNaN(convertedNum), convertedNum);
// console.log(stringedNum, convertedNum);

const date = new Date();
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTime());

date.setHours(16);

console.log(date.getUTCHours());
console.log(date, "===date");

var a = 1;
if (a) {
  let b = 2;
}
function myFoo(name, surname) {
  // var b = 2;
  // console.log(b, "===b");
  // return name + " " + surname;
  alert("Hi " + name + " " + surname);
}

// alert(b);

const userName = myFoo("Abdullah", "Motiwala");
console.log(userName);
myFoo("Ahsan", "abcd");
// const result123 = myFoo

// conventional function
// function myFoo2(){}
// anonymous function
// function (){}
// IIFE Immediate Invoke Function Expression
// let userName1 = "Username";
// alert(userName1);
// (function () {
//   let userName = "Username";
//   alert(userName);
// })();

let day = 9;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday

let replyChances = false;

while (!replyChances) {
  console.log("Waiting for the message...");
  // Simulate checking the door
  replyChances = Math.random() > 0.7; // 30% chance the door opens each check
}

console.log("The door is open! You can enter.");

let thirsty = false;

do {
  console.log("Taking a sip of water.");
  // Simulate whether you're still thirsty
  thirsty = Math.random() < 0.5; // 50% chance you’re still thirsty
} while (thirsty);

console.log("You are no longer thirsty!");

const myObj = {
  a: 1,
  b: 2,
  d: function () {
    console.log(this, "how're you");
  },
};

function abc() {
  console.log(this, "how're you");
}

abc();

// upsert
myObj.a = 3; //update
myObj.c = 3; //insert

delete myObj.a;
myObj.d();

console.log(myObj);

// const myNumber =12
function User(firstName, lastName, age) {
  // let a = 1;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

User.prototype.updateName = function (newName) {
  this.firstName = newName;
};

const firstUser = new User("Abdullah", "Motiwala", 30);
console.log(firstUser);
firstUser.updateName("Mohd.");
console.log(firstUser);

const secondUser = new User("Abdullah", "Motiwala", 30);
console.log(secondUser);
secondUser.updateName("Mohd.");
console.log(secondUser);

const myAr = [1, 2, 3];
console.log(myAr);

function myFoo5() {
  try {
    // your code here
    throw new Error("Sample Error");
  } catch (error) {
    alert("Error Appeared");
    console.log(error);
  }
}

myFoo5();

const newHTML = `<h1>
<div>

</div>
</h1>`;

document.getElementById("").innerHTML += newHTML;

console.log("hello world");
const array = [1, 2, 3, 4, 5];
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

// for vs for each loop

// //for loop
// let numbers = [12, 13, 14, 15, 133, 134];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
// }

// const age = [12, 13, 14, 15, 16, 17, 18, 19];
// const square = [];

// for (let i = 0; i < age.length; i++) {
//   const elements = age[i];
//   const elementsSquare = elements * elements;
//   square.push(elementsSquare);
// }
// console.log(square);

// foreach loop

// const age = [12, 13, 14, 15, 16, 17, 18, 19];
// age.forEach(myFunction);

// function myFunction() {
//   return age;
// }
// console.log(age);

// const numbers = [11, 2, 12, 3, 23, 123, 13];
// numbers.forEach(numbersFunction);

// function numbersFunction(x) {
//   console.log(x);
// }

// const numbers = [11, 2, 12, 3, 23, 123, 13];
// numbers.forEach(function (x) {
//   console.log(x);
// });

// const numbers = [1, 2, 3, 6, 7, 89, 0];
// numbers.forEach(myfunction);
// function myfunction(x) {
//   console.log(x);
// }

// const numbers = [1, 2, 3, 6, 7, 89, 0];
// numbers.forEach(function (x) {
//   console.log(x);
// });

// // numbers Square
// const numbers = [1, 2, 3, 6, 7, 89, 0];
// const numSquare = [];
// numbers.forEach(function (x) {
//   const elements = x * x;
//   numSquare.push(elements);
// });
// console.log(numSquare);

// add+5
const numbers = [1, 2, 3, 6, 7, 89, 0];
numbers.forEach(function (x, index, arr) {
  arr[index] = x + 5;
});
console.log(numbers);

const ages = [4, 2, 3, 6, 7, 89, 0];
ages.forEach(function (x, index, arr) {
  arr[index] = x - 1;
});

console.log(ages);

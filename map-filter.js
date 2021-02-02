// const numbers = [2, 4, 5, 6, 32, 7];
// const squarOutPut = [];
// for (let i = 0; i < numbers.length; i++) {
//   const elements = numbers[i];
//   const result = elements * elements;
//   squarOutPut.push(result);
// }
// console.log(squarOutPut);

// const age = [12, 13, 14, 15, 133, 134];
// const newAgeSquar = [];
// for (let i = 0; i < age.length; i++) {
//   const elements = age[i];
//   const squareElements = elements * elements;
//   newAgeSquar.push(squareElements);
// }
// console.log(newAgeSquar);

// const numbers = [1, 2, 3, 45, 6, 7, 8, 9, 10];
// const numbersSqure = [];
// numbers.forEach(function (x) {
//   numbersSqure.push(x * x);
// });
// console.log(numbersSqure);

// using map
// const numbers = [1, 2, 3, 45, 6, 7, 8, 9, 10];
// const numbersSqure = [];
// numbers.forEach(function (x) {
//   numbersSqure.push(x * x);
// });
// console.log(numbersSqure);

// // using map
// const numbers = [1, 2, 3, 45, 6, 7, 8, 9, 10];
// const numbersSqure = numbers.map(function (x) {
//   return x * x;
// });

// console.log(numbersSqure);

// const age = [12, 13, 14, 15, 133, 134];

// const addAge = age.map(function (x) {
//   return x + 5;
// });
// console.log(addAge);

// using filter
const age = [12, 1, 2, 3, 13, 14, 15, 133, 134];

const addAge = age.filter(function (x) {
  return x < 5;
});
console.log(addAge);

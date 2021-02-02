let studentsInfo = [
  {
    id: 09,
    name: "Reazul",
    age: 21,
    gpa: 8.09,
  },
  {
    id: 08,
    name: "Monirul",
    age: 29,
    gpa: 2.09,
  },
  {
    id: 07,
    name: "somirul",
    age: 99,
    gpa: 3.09,
  },
  {
    id: 06,
    name: "komirul",
    age: 18,
    gpa: 2.09,
  },
];
// function studentsName() {
//   return studentsInfo.filter(function (x) {
//     return x.gpa < 3;
//   });
// }
// console.log(studentsName());

// // Tranditional Function
// function studensName() {
//   return studentsInfo
//     .filter(function (x) {
//       return x.gpa < 4;
//     })
//     .map(function (y) {
//       return y.name;
//     });
// }
// console.log(studensName());

// Arrow Function
// const studentNames1 = () => {
//   return studentsInfo
//     .filter((x) => {
//       return x.gpa > 3;
//     })
//     .map((y) => {
//       return y.name;
//     });
// };

// console.log(studentNames1());

// // Arrow Function
// const studentsDetails = (x) => {
//   return studentsInfo
//     .filter((x) => {
//       return x.age > 20; // return na korle third bracket utheyjabe
//     })
//     .map((y) => {
//       return y.name;
//     });
// };

// console.log(studentsDetails());

// third bracket na use kore arrow function

const students = (x) => {
  return studentsInfo.filter((x) => x.age > 20).map((y) => y.name);
};
console.log(students());

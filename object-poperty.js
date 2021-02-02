const students = [
  { id: 21, name: "reazul" },
  { id: 11, name: "minhazul" },
  { id: 13, name: "kalam" },
  { id: 33, name: "jamal" },
];

const names = students.map((n) => n.name);
const ids = students.map((i) => i.id);
const biggerNumber = students.filter((b) => b.id > 20);
const biggerNumber = students.find((b) => b.id > 20);

console.log(names);
console.log(ids);
console.log(biggerNumber);

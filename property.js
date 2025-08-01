const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 250000,
  married: true,
  "fav places": ["Bogura", "Bandarban"],
};
// console.log(person);

// dot notation --> Commonly Used
// console.log(person.salary);
// const income = person.salary;
// console.log(income);

// Bracket Notation

// Third bracket diye access kora

console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);
console.log(person["fav places"]);

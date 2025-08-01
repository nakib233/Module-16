const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 250000,
  married: true,
  "fav places": ["Bogura", "Bandarban"],
};

person.salary = 300000;
person["married"] = false;
console.log(person);

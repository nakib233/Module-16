const college = {
  name: "VNC",
  class: ["11", "12"],
  events: ["Science Fair", "Bijoy Dibosh", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};
console.log(college.unique.result.merit);
college.unique.result.merit = "top top top Most";
console.log(college.unique.result.merit);

// Accessing the Array index
college.events[1] = "Shahid Dibosh";
console.log(college.events);

// Deleting a property or Key

delete college.class;
console.log(college);

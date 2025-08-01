const sentence = "I am learning Web Dev.";

// Tricks no.1

// let reverse = "";
// for (const letter of sentence) {
//   //   console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);

// Tricks no.2
// let reverse = " ";
// let rev = "";
// for (let i = 0; i < sentence.length; i++) {
//   const letter = sentence[i];
//   rev = letter + rev;
// }

// console.log(rev);

// Shortcut
const reversed = sentence.split("").reverse().join("");
console.log(reversed);

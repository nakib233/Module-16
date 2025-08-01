const address = "andorkilla";
const part = address.slice(2, 5);
console.log(part);

const sentence = "I am a good,hardworking person.";
console.log(sentence.split(","));

const friends = "Rahim, Kahim, Dahim, Lahim, Fahim, Sahim";
console.log(friends.split(","));

const realFriend = ["Rahim", " Kahim", " Dahim", " Lahim", " Fahim", " Sahim"];
new_frd = realFriend.join("--");
console.log(typeof new_frd);

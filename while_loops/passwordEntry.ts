// Think of a password and assign it to a variable.

// Write a program that asks the user for the password and gives them 3 attempts to enter it correctly.
// If the user enters the correct password, congratulate them.
// When the user fails to enter the correct password, inform them about the amount of remaining attempts.
// If the user fails to enter the correct password 3 times, tell them that they are out of attempts and end the program.

let attempt = 3;
let password = "";
const truePassword = "CrazyMice666!";
while (attempt > 0 && password != truePassword) {
  password = prompt("Password:")!;
  attempt -= 1;
  if (attempt >= 1 && password != truePassword) {
    console.log(`Sorry, try again. ${attempt} attempts remaining.`);
  }
}
if (password != truePassword) {
  console.log("You are out of attempts!");
} else {
  console.log("Congratulations!");
}

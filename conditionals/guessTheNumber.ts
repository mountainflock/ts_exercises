// Make a program that generates a random number from 1 to 10.
// Then, the user tries to guess the number on the first try.
// If they succeed, the program congratulates them.
// Otherwise, it tells them they were wrong and calculates by how much.

const x = Math.floor(Math.random() * 10) + 1;
console.log("I'm thinkig of the number between 1 and 10.");
const number = parseInt(prompt("Guess:")!);
if (number == x) {
  console.log(`That's right, it's ${x}!`)!;
}
if (number != x) {
  console.log(`Wrong! I was thinking of ${x}.`)!;
}
if (number > x) {
  console.log(`You were off by ${number - x}.`)!;
}
if (number < x) {
  console.log(`You were off by ${x - number}.`);
}

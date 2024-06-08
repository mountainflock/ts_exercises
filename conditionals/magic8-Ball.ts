// Make a program that works like the Magic 8-Ball.
// It lets the user enter a question and then gives them one of 10 possible answers, chosen randomly.
// The answers should range from a certain "yes" to a certain "no", with different degrees of uncertainty in-between.

const x = Math.floor(Math.random() * 10);
prompt("Enter your question:");
if (x == 0) {
  console.log("Yes.")!;
}
if (x == 1) {
  console.log("Definitely.");
}
if (x == 2) {
  console.log("Most likely.");
}
if (x == 3) {
  console.log("It is possible.");
}
if (x == 4) {
  console.log("Maybe, maybe not.");
}
if (x == 5) {
  console.log("Can't tell for sure.");
}
if (x == 6) {
  console.log("That is unknown.");
}
if (x == 7) {
  console.log("Very unlikely.");
}
if (x == 8) {
  console.log("Definitely not.");
}
if (x == 9) {
  console.log("No.");
}

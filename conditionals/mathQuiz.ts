// Create a quiz! Make up five simple arithmetic expressions.
// Show them to the user, one by one, and ask to calculate and give an answer for each one.
// The program should tell the user if the given answer is correct.

// Add empty lines between each question and answer for brevity.

// In the end, tell the user how many of them did they calculate correctly.

let correct = 0;
console.log("1 + 1 = ?");
const x1 = parseInt(prompt("Answer:")!);
if (x1 == 2) {
  console.log("Correct!");
  correct = correct + 1;
} else {
  console.log("Wrong! The answer is 2.");
}

console.log();
console.log("2 + 2 * 2 = ?");
const x2 = parseInt(prompt("Answer:")!);
if (x2 == 8) {
  console.log("Correct!");
  correct = correct + 1;
} else {
  console.log("Wrong! The answer is 8.");
}

console.log();
console.log("3 * 5 = ?");
const x3 = parseInt(prompt("Answer:")!);
if (x3 == 15) {
  console.log("Correct!");
  correct = correct + 1;
} else {
  console.log("Wrong! The answer is 15.");
}

console.log();
console.log("74568 + 3 = ?");
const x4 = parseInt(prompt("Answer:")!);
if (x4 == 74571) {
  console.log("Correct!");
  correct = correct + 1;
} else {
  console.log("Wrong! The answer is 74571.");
}

console.log();
console.log("0 * 1 * 2 * 3 = ?");
const x5 = parseInt(prompt("Answer:")!);
if (x5 == 0) {
  console.log("Correct!");
  correct = correct + 1;
} else {
  console.log("Wrong! The answer is 0.");
}

console.log();
console.log(`You got ${correct} out of 5.`);

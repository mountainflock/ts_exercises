// Ask the user for three numbers that describe a counting operation:
// a number to start with, a number to count to, and how big is the counting step.
// Then, display the numbers in the described counting sequence on a single line, separated by space.

const from = parseInt(prompt("Count from:")!);
const to = parseInt(prompt("Count to:")!);
const by = parseInt(prompt("Count by:")!);

console.log();
let line = "";
for (let i = from; i <= to; i += by) {
  line += `${i} `;
}
console.log(line);

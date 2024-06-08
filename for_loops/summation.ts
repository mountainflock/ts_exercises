// Ask the user to enter a number.
// Then, display a formula of all numbers starting from 1 up to the entered number, summed, and the result.
// The formula and the result should be displayed on a single line.

const n = parseInt(prompt("Enter a number:")!);
let line = "";
let sum = 1;
for (let i = 2; i <= n; i += 1) {
  line += ` + ${i}`;
  sum += i;
}
console.log(`1${line} = ${sum}`);

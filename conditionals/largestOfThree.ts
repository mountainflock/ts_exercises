// Ask the user to enter three numbers. Then, display the largest number of all three.

const x = parseInt(prompt("Enter the first number:")!);
const y = parseInt(prompt("Enter the second number:")!);
const z = parseInt(prompt("Enter the third number:")!);
if (x > y && x > z) {
  console.log(`${x} is the largest!`);
} else if (y > x && y > z) {
  console.log(`${y} is the largest!`);
} else {
  console.log(`${z} is the largest!`);
}

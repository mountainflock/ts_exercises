// Ask the user to enter two numbers. Then, display the largest number of the two.

const x = parseInt(prompt("Enter the first number:")!);
const y = parseInt(prompt("Enter the second number:")!);
if (x > y) {
  console.log(`${x} is the largest!`);
} else {
  console.log(`${y} is the largest!`);
}

// Ask the user to enter a number. Then, calculate and display the factorial of that number.

const n = parseInt(prompt("Enter a number:")!);
let factorial = 1;
for (let i = n; i > 1; i -= 1) {
  factorial *= i;
}
console.log(`${n}! = ${factorial}`);

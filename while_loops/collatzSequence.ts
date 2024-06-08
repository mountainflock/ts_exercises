// Write a program that asks the user to input a positive integer.
// The program should then display all the integers in the Collatz sequence starting with the provided one and stopping at 1.
// The program should also show the total number of steps in the sequence.
// The program should also show the largest value encountered in the sequence.

let steps = 0;
let largest = 1;

let n = parseInt(prompt("Enter a number:")!);
while (n != 1) {
  steps += 1;
  console.log(n);
  if (n % 2 == 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  if (n > largest) {
    largest = n;
  }
}
console.log(n);
console.log(`Steps: ${steps + 1}`);
console.log(`Largest: ${largest}`);

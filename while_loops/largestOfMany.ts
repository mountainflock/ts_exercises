// Write a program that allows the user to enter many numbers, one by one.
// The program should keep asking for more numbers until the user enters a zero.
// After that, display the largest number out of all that were entered.

// First, complete a version of the program that only works with positive integers.
// When it works like the first example below, only then proceed to improve the program to work with negative integers.

let answer = 1;
let largest = 0;

while (answer != 0) {
  answer = parseInt(prompt("Enter a number:")!);
  if (answer != 0 && (answer > largest || largest == 0)) {
    largest = answer;
  }
}
console.log();
console.log(`${largest} is the largest`);

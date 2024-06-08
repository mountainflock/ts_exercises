// Ask the user to enter a number. Then, tell the user if this number is odd or even.
// Use the remainder operator to figure this out.

const x = parseInt(prompt("Enter a number:")!);
if (x % 2 == 0) {
  console.log("This is an even number.");
} else {
  console.log("This is an odd number.");
}

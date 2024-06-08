// Ask the user to enter three sides of a triangle as numbers.
// Then, conclude if the triangle is right or not.
// It should not matter, which order the sides are entered in.

const x = parseInt(prompt("Side 1:")!);
const y = parseInt(prompt("Side 2:")!);
const z = parseInt(prompt("Side 3:")!);
if (
  x * x + y * y == z * z ||
  x * x + z * z == y * y ||
  y * y + z * z == x * x
) {
  console.log("This is a right triangle!");
} else {
  console.log("This is NOT a right triangle!");
}

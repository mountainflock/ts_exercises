// Ask the user to enter three sides of a triangle as numbers.
// Then, tell the user the type of this triangle, according to Euclid's classification.

const x = parseInt(prompt("Side 1:")!);
const y = parseInt(prompt("Side 2:")!);
const z = parseInt(prompt("Side 3:")!);
if (x == y && y == z) {
  console.log("This triangle is equilateral.");
} else if (x == y || x == z || y == z) {
  console.log("This triangle is isosceles.");
} else {
  console.log("This triangle is scalene.");
}

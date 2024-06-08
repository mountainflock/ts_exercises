// Write three different functions, each accepting a circle's radius as an argument and each returning a number:
// the diameter, the area, and the circumference of the circle with the provided radius.
// Ask the user to enter a circle's radius and show the results of all three calculations.

function diameter(radius: number): number {
  return radius * 2;
}
function area(radius: number): number {
  return Math.PI * radius * radius;
}
function circumference(radius: number): number {
  return 2 * Math.PI * radius;
}

const r = parseInt(prompt("Radius:")!);
console.log(`Diameter: ${diameter(r)}`);
console.log(`Area: ${area(r)}`);
console.log(`Circumference: ${circumference(r)}`);

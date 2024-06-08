// Ask the user to enter X and Y coordinates for a point on the screen.
// Then, check if this point lies within a rectangle defined by two points, the top-left corner (100, 100) and the bottom-right corner (200, 200).
// If it does, report a hit, otherwise report a miss.

const x = parseInt(prompt("X:")!);
const y = parseInt(prompt("Y:")!);
if (x >= 100 && x <= 200 && y >= 100 && y <= 200) {
  console.log("Hit!");
} else {
  console.log("Miss.");
}

// Write a function that accepts three arguments: width and height as integers, and a single character.
// It should display a rectangle shape using the provided character, repeated to fill the provided width and height.
// It should not return anything.

function drawRectangle(width: number, height: number, character: string): void {
  for (let i = 1; i <= height; i += 1) {
    let line = "";
    for (let j = 1; j <= width; j += 1) {
      line += character;
    }
    console.log(line);
  }
}
drawRectangle(10, 5, "#");
console.log();
drawRectangle(8, 2, "@");
console.log();
drawRectangle(4, 4, "*");

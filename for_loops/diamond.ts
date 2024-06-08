// Write a program that displays a diamond of numbers:
// The numbers that make up the diamond are horizontally separated by a single space.
// The pattern should be displayed using loops.
// It should be possible to slightly modify the program to get diamonds of different sizes with any number between 2 and 9 in the center.

const size = parseInt(prompt("Enter size:")!);

for (let j = 1; j <= size; j += 1) {
  let line = "";
  for (let i = 1; i <= j; i += 1) {
    line += `${i} `;
  }
  for (let k = j - 1; k >= 1; k -= 1) {
    line += `${k} `;
  }
  for (let l = j; l <= size; l += 1) {
    line = `  ${line}`;
  }
  console.log(line);
}

for (let j = size - 1; j >= 1; j -= 1) {
  let line = "";
  for (let i = 1; i <= j; i += 1) {
    line += `${i} `;
  }
  for (let k = j - 1; k >= 1; k -= 1) {
    line += `${k} `;
  }
  for (let l = j; l <= size; l += 1) {
    line = `  ${line}`;
  }
  console.log(line);
}

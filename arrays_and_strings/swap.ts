// Write a function that accepts an array of numbers and two additional numbers representing array indexes.
// The function changes the array in-place by swapping the values at the given indexes.
// So, the value at the first index is moved to the second index, and vice versa.

// Ask the user to enter two indexes.
// Use the function to swap the values at the given indexes in the array [1, 2, 3, 4, 5].
// Display the contents of the array after the values have been swapped.

const a = [1, 2, 3, 4, 5];
console.log(`Before swap: [${[a]}]`);

const x = parseInt(prompt("Index 1:")!);
const y = parseInt(prompt("Index 2:")!);

function swap(numbers: number[], index1: number, index2: number): void {
  const n = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = n;
}

swap(a, x, y);
console.log(`After swap: [${a}]`);

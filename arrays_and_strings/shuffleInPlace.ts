// Write a function that accepts an array of numbers and shuffles it in-place.
// The shuffling is performed by swapping each element with another element in the array, chosen randomly.

// Use the function to shuffle the array [10, 20, 30, 40, 50, 60, 70, 80, 90] twice and display the result after each shuffling.

const x = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(`Before shuffle: [${[x]}]`);

function shuffle(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i += 1) {
    const random = Math.floor(Math.random() * numbers.length);
    swap(numbers, i, random);
  }
}

function swap(numbers: number[], index1: number, index2: number): void {
  const n = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = n;
}

shuffle(x);
console.log(`First shuffle:  [${x}]`);
shuffle(x);
console.log(`Second shuffle: [${x}]`);

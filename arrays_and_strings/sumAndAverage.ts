// Write two basic aggregate functions, each accepting an array of numbers
// and returning a number: the sum and the average of all of the provided numbers.

function sum(numbers: number[]): number {
  let s = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    s += numbers[i];
  }
  return s;
}

function average(numbers: number[]): number {
  if (numbers.length != 0) {
    return sum(numbers) / numbers.length;
  } else {
    return 0;
  }
}

console.log(`sum([1, 2, 3, 4, 5]) = ${sum([1, 2, 3, 4, 5])}`);
console.log(`average([1, 2, 3, 4, 5]) = ${average([1, 2, 3, 4, 5])}`);
console.log(`sum([9, 8, 7, 6]) = ${sum([9, 8, 7, 6])}`);
console.log(`average([9, 8, 7, 6]) = ${average([9, 8, 7, 6])}`);
console.log(`sum([]) = ${sum([])}`);
console.log(`average([]) = ${average([])}`);

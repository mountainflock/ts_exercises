// Write a function that accepts an array of numbers and calculates a running total, then returns it as a new array.
// In the returned array, the number at any given index is the sum total of all numbers from the input array,
// starting with the first one and ending with the one at the same index.

function runningTotal(numbers: number[]): number[] {
  const x = [];
  let s = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    s += numbers[i];
    x.push(s);
  }
  return x;
}
console.log(
  `Running total for [1, 2, 3, 4, 5] is [${runningTotal([1, 2, 3, 4, 5])}]`
);
console.log(
  `Running total for [-3, -2, -1, 0] is [${runningTotal([-3, -2, -1, 0])}]`
);
console.log(`Running total for [] is [${runningTotal([])}]`);

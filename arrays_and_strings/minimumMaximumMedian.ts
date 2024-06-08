// Write three functions, each accepting an array of numbers and returning a single number from the array:
// the minimum, the maximum, and the median.

function minimum(numbers: number[]): number {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function maximum(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(`minimum([1, 4, 2, 5, 3]) = ${minimum([1, 4, 2, 5, 3])}`);
console.log(`maximum([1, 4, 2, 5, 3]) = ${maximum([1, 4, 2, 5, 3])}`);
console.log(`minimum([9, 7, 4, 5]) = ${minimum([9, 7, 4, 5])}`);
console.log(`maximum([9, 7, 4, 5]) = ${maximum([9, 7, 4, 5])}`);

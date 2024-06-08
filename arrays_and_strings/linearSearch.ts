// Write two functions.
// The first one accepts an array of numbers and a number to search for.
// It performs linear search on the given array.
// If the number is found in the array, the function returns its index. Otherwise, it returns nothing.

// The second one also accepts an array of numbers and a number to search for.
// It uses the first function to find the index of the given number in the array, then returns a boolean.
// If the number was found, it returns true. Otherwise, it returns false.

function indexOf(numbers: number[], search: number): number | null {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] == search) {
      return i;
    }
  }
  return null;
}

function contains(numbers: number[], search: number): boolean {
  return indexOf(numbers, search) != null;
}

console.log(`Index of 1 in [1, 2, 3]: ${indexOf([1, 2, 3], 1)}`);
console.log(`Is 1 in [1, 2, 3]: ${contains([1, 2, 3], 1)}`);
console.log(`Index of 4 in [1, 2, 3]: ${indexOf([1, 2, 3], 4)}`);
console.log(`Is 4 in [1, 2, 3]: ${contains([1, 2, 3], 4)}`);
console.log(`Index of 1 in [3, 2, 1]: ${indexOf([3, 2, 1], 1)}`);
console.log(`Is 1 in [3, 2, 1]: ${contains([3, 2, 1], 1)}`);
console.log(`Index of 1 in []: ${indexOf([], 1)}`);
console.log(`Is 1 in []: ${contains([], 1)}`);

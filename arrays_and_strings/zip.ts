// Write a function that accepts two arrays of numbers and creates a new array by pairing up elements with the same index from both arrays.
// The returned array should have the same length as the shortest of the two provided arrays.

function zip(a: number[], b: number[]): number[][] {
  const zipped = [];
  for (let i = 0; i < a.length && i < b.length; i += 1) {
    zipped.push([a[i], b[i]]);
  }
  return zipped;
}
console.log(zip([1, 2, 3], [4, 5, 6]));
console.log(zip([1, 2, 3], [4]));
console.log(zip([1, 2], [4, 5, 6]));
console.log(zip([], []));

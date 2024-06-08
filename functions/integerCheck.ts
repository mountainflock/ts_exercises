// Write two functions, each accepting a single string argument.
// The first one checks if the string argument can be converted to an integer and returns the result as a boolean.
// The second one does the same, but checks for a float.

function isInteger(s: string): boolean {
  return !isNaN(parseInt(s));
}

function isFloat(s: string): boolean {
  return !isNaN(parseFloat(s));
}

console.log(`12 is ${isInteger("12") ? "" : "NOT "}an integer.`);
console.log(`12 is ${isFloat("12") ? "" : "NOT "}a float.`);
console.log(`420.69 is ${isFloat("420.69") ? "" : "NOT "}a float.`);
console.log(`foo is ${isInteger("foo") ? "" : "NOT "}an integer.`);
console.log(`bar is ${isFloat("bar") ? "" : "NOT "}a float.`);
console.log(`1e2 is ${isFloat("1e2") ? "" : "NOT "}a float.`);

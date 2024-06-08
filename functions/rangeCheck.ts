// Write a function that accepts three numbers and checks if the the first one lies
// within the inclusive range between the second one and the third one.
// If it does, the function returns true. Otherwise, it returns false.

function inRange(n: number, from: number, to: number): boolean {
  return n >= from && n <= to;
}
console.log(`1 is ${inRange(1, 1, 10) ? "" : "NOT "}between 1 and 10.`);
console.log(`5 is ${inRange(5, 1, 10) ? "" : "NOT "}between 1 and 10.`);
console.log(`10 is ${inRange(10, 1, 10) ? "" : "NOT "}between 1 and 10.`);
console.log(`11 is ${inRange(11, 1, 10) ? "" : "NOT "}between 1 and 10.`);
console.log(`0 is ${inRange(0, -1, 1) ? "" : "NOT "}between -1 and 1.`);
console.log(`0 is ${inRange(0, 1, -1) ? "" : "NOT "}between 1 and -1.`);

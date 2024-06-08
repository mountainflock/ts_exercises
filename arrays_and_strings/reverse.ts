// Write two functions.
// The first one accepts an array of numbers and returns an array with the same elements, but in reverse order.
// The second one accepts a string and returns a string with the same characters, but also in reverse order.
// The first function must not change the contents of the array that it receives as an argument.
// It returns a completely new array.

function reverseArray(numbers: number[]): number[] {
  const reversed = [];
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    reversed.push(numbers[i]);
  }
  return reversed;
}

function reverseString(s: string): string {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i -= 1) {
    reversed += s[i];
  }
  return reversed;
}
5;
console.log(
  `[1, 1, 2, 3, 5, 8] reversed is [${reverseArray([1, 1, 2, 3, 5, 8])}]`
);
console.log(
  `[10, 20, 30, 40, 50] reversed is [${reverseArray([10, 20, 30, 40, 50])}]`
);
console.log(`[] reversed is [${reverseArray([])}]`);
console.log(`"alucard" reversed is "${reverseString("alucard")}"`);
console.log(`"" reversed is "${reverseString("")}"`);

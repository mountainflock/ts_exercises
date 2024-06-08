// Ask the user to enter two numbers, one at a time.
// Then, display a variety of calculations using these two numbers.

const n1 = parseInt(prompt("Enter the first number:")!);
const n2 = parseInt(prompt("Enter the second number:")!);
console.log();
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} < ${n2} = ${n1 < n2}`);
console.log(`${n1} > ${n2} = ${n1 > n2}`);
console.log(`${n1} <= ${n2} = ${n1 <= n2}`);
console.log(`${n1} >= ${n2} = ${n1 >= n2}`);

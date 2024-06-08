// Write a function that accepts a single number, checks if that number is a prime number, and returns the result as a boolean.

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

let primeCount = 0;
let primeCandidate = 2;
let line = "";
while (primeCount < 25) {
  if (isPrime(primeCandidate)) {
    primeCount += 1;
    line += `${primeCandidate} `;
  }
  primeCandidate += 1;
}

let largest = 0;
for (let i = 2; i < 1000; i += 1) {
  if (isPrime(i) && i > largest) {
    largest = i;
  }
}

console.log(`1 is ${isPrime(1) ? "" : "NOT "}prime.`);
console.log(`2 is ${isPrime(2) ? "" : "NOT "}prime.`);
console.log(`4 is ${isPrime(4) ? "" : "NOT "}prime.`);
console.log(`12 is ${isPrime(12) ? "" : "NOT "}prime.`);
console.log(`13 is ${isPrime(13) ? "" : "NOT "}prime.`);
console.log(`221 is ${isPrime(221) ? "" : "NOT "}prime.`);
console.log(`223 is ${isPrime(223) ? "" : "NOT "}prime.`);
console.log();
console.log(line);
console.log();
console.log(largest);

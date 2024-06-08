// Write two functions.
// The first one doesn't accept any arguments and returns a random card suit as a string with a Unicode symbol.
// The second one accepts a number from 2 to 11 and returns a random card rank and suit as a string.
// The second function should make use of the first function to generate the suit.
// If the input to the second function is from 2 to 9, it generates the respective rank.
// If the input is 10, it generates a 10, jack, queen, or king randomly. If the input is 11, it generates an ace.
// Call the second function with every possible input from 2 to 11 and display each result.

function generateSuit(): string {
  const rs = Math.floor(Math.random() * 4);
  if (rs == 0) {
    return "♥";
  } else if (rs == 1) {
    return "♦";
  } else if (rs == 2) {
    return "♣";
  } else {
    return "♠";
  }
}

function generateCard(value: number): string {
  if (value < 2 || value > 11) {
    throw "Invalid value";
  }
  let v = "";
  if (value >= 2 && value <= 9) {
    v = `${value}`;
  } else if (value == 11) {
    v = "A";
  } else if (value == 10) {
    const rv = Math.floor(Math.random() * 4);
    if (rv == 0) {
      v = "10";
    } else if (rv == 1) {
      v = "J";
    } else if (rv == 2) {
      v = "Q";
    } else if (rv == 3) {
      v = "K";
    }
  }
  return `${v}${generateSuit()}`;
}

console.log(generateCard(2));
console.log(generateCard(3));
console.log(generateCard(4));
console.log(generateCard(5));
console.log(generateCard(6));
console.log(generateCard(7));
console.log(generateCard(8));
console.log(generateCard(9));
console.log(generateCard(10));
console.log(generateCard(11));

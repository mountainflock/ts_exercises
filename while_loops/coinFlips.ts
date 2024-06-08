// Write a program that flips a coin! If it's "heads", flip it again. Continue flipping until the result it "tails".
// Display the result of every coin flip, then tally and display the total amount of "heads".

// To "flip a coin", generate a random number out of 0 and 1. If it's 0, then it's "heads". If it's 1, then it's "tails".

let heads = 0;
console.log("Flipping!");
let side = Math.floor(Math.random() * 2);
while (side == 0) {
  heads += 1;
  side = Math.floor(Math.random() * 2);
  console.log("HEADS");
}
console.log("TAILS");
console.log();
console.log(`Heads: ${heads}`);

// Ask the user if they want a piece of candy.
// If they do, tell them that they now have one piece of candy.
// Then, ask them if they want another one.
// Repeat this process until the user refuses to take any more candy.

// In the end, tell the user how many pieces of candy they snatched in total.

let amount = 0;
let answer = confirm("Do you want some candy?");
while (answer) {
  amount += 1;
  answer = confirm("Do you want another one?");
}
console.log(`Your total: ${amount}`);

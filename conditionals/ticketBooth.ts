// Make a program that issues a ticket price base on age.
// First, ask the user for their age.

// If it's less than 7, then the price is $2.
// If it's from 7 to 18, then the price is $3.
// If it's from 19 to 55, then the price is $4.
// If it's more than 55, then the price is $2.
// Tell the user what is the price.

console.log("Welcome!");
const age = parseInt(prompt("How old are you?")!);
if (age < 7) {
  console.log("That'll be $2 for the ticket, thanks.");
} else if (age <= 18) {
  console.log("That'll be $3 for the ticket, thanks.");
} else if (age <= 55) {
  console.log("That'll be $4 for the ticket, thanks.");
} else {
  console.log("That'll be $2 for the ticket, thanks.");
}

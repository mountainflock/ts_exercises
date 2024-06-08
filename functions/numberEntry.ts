// Write a function that asks the user to enter a number using the message provided as a string argument,
// then checks if whatever the user entered is a valid number.
// If it is, the function returns the number as its result.
// If it's not, the function displays an error, then asks the user to enter a number again.
// This keeps repeating, until a valid number is entered.
// The function does not return a result until a valid number is entered.

function getNumber(message: string): number {
  let m = parseInt(prompt(message)!);
  while (isNaN(m)) {
    console.log("That's not a number!");
    m = parseInt(prompt(message)!);
  }
  return m;
}
console.log(`You've entered ${getNumber("Enter a number:")}.`);

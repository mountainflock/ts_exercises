// Ask the user for their age. Then, inform the user about all of their driving options or tell them they can't drive at all.

// If the age is less than 16, they can't drive.
// If the age is 16 or over, they can drive a motorcycle.
// If the age is 18 or over, they can drive a car.

const age = parseInt(prompt("How old are you?")!);
if (age < 16) {
  console.log("You can't drive.");
}
if (age >= 16) {
  console.log("You can drive a motorcycle.");
}
if (age >= 18) {
  console.log("You can drive a car.");
}

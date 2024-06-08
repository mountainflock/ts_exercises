// Ask the user to enter a name of a product, its price before tax, and the tax in percent.
// Then calculate and display the total price after tax for the entered product.

const name = prompt("Enter product:")!;
const price = parseInt(prompt("Enter price before tax:")!);
const tax = parseInt(prompt("Enter tax in percent:")!);
console.log(`The total price for ${name} is ${price + price * (tax / 100)}!`);

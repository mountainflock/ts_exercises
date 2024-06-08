// Ask the user for their name. Next, greet the user by their name and ask for their age in the same line.
// Finally, deduce and display the user's year of birth.

const name = prompt("Enter your name:")!;
const age = parseInt(prompt(`Nice to meet you, ${name}! How old are you?`)!);
console.log(`Ah, so you were born in ${2022 - age}.`);

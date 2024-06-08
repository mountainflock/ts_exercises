// Write a program that works as a fair shell game dealer.

// Ask the player what is their starting budget.
// Ask the player to bet a certain amount of money.
// Generate a secret random number from 1 to 3.
// Ask the player to enter their choice from 1 to 3.
// Inform the player if they guessed correctly. If not, tell them what was the correct answer.
// If they guessed correctly, double their stake. Otherwise, they lose the stake.
// Inform the player about their current remaining budget and ask if they want to continue playing.
// The player can enter y to agree or n to disagree.
// If they do, repeat steps 2–6. Otherwise, end the game.

console.log("Welcome to the shell game!");

let budget = parseInt(prompt("Enter your starting budget:")!);
while (budget < 1) {
  console.log("That's not a valid budget!");
  budget = parseInt(prompt("Enter your starting budget:")!);
}

while (budget > 0) {
  let bet: number;
  while (true) {
    console.log();
    bet = parseInt(prompt("Enter your bet:")!);
    if (bet < 1) {
      console.log("The minimum bet is 1!");
    } else if (bet > budget) {
      console.log(`You don't have that much! You have $${budget}.`);
    } else {
      break;
    }
  }

  const secret = Math.floor(Math.random() * 3) + 1;
  const guess = parseInt(prompt("Guess the shell (1-3):")!);
  if (guess == secret) {
    budget += bet;
    console.log("You've won!");
  } else {
    budget -= bet;
    console.log(`You've lost! The right answer was ${secret}.`);
  }

  console.log(`Your budget is now $${budget}.`);
  if (budget > 0) {
    const again = confirm("Play again?");
    if (!again) {
      break;
    }
  }
}

console.log();
console.log(`You leave with $${budget}.`);
console.log("Goodbye!");

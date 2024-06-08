// Write a program that plays Wordle.

// Read the list of words from a file and into an array of strings.
// Pick a word from the array randomly.
// Ask the player for their guess.
// Display feedback based on the letters in their guess. You can use emoji square symbols to visualize feedback.
// Display all of the previously-guessed letters as a hint.
// Repeat steps 3–5 until the word is guessed correctly.

const text = await Deno.readTextFile("./words.txt");
const words = text.split("\n");
const x = Math.floor(Math.random() * words.length);
const rightWord = words[x];
let attempt = 1;
let guessedLetters = "";
console.log("Guess the word!");
console.log();

function createPattern(word: string, answer: string): string {
  let line = "";
  for (let i = 0; i < rightWord.length; i += 1) {
    if (word[i] == answer[i]) {
      line += "🟩";
    } else if (word.includes(answer[i])) {
      line += "🟨";
    } else {
      line += "⬜";
    }
  }
  return line;
}

while (attempt <= 6) {
  if (guessedLetters != "") {
    const sortedLetters = guessedLetters.split("").sort().join("");
    console.log(`Guessed letters: ${sortedLetters}`);
  }
  const guess = prompt("Your guess:")!;
  if (!words.includes(guess)) {
    console.log("This is not a valid word!");
    console.log();
    continue;
  }
  for (let i = 0; i < guess.length; i += 1) {
    if (!guessedLetters.includes(guess[i])) {
      guessedLetters += guess[i];
    }
  }
  console.log(createPattern(rightWord, guess));
  if (guess == rightWord) {
    break;
  }
  attempt += 1;
  console.log();
}

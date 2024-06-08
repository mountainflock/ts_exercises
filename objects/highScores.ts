// Write a program that keeps track of a list of high scores and allows to update it.

// Ask the user to enter a score as a number, then their name. Assume that the entered name is exactly 3 characters long and does not contain spaces.
// Load the existing list of high scores from a text file into a list of objects with separate fields for names and scores.
// If the newly entered score is higher than any of the already-recorded ones, insert the name with the score into the list and truncate it to 5 items.
// Save the names with the scores to a text file.
// Finally, display the final table of high scores.

type HighScore = {
  name: string;
  score: number;
};

async function loadScores(fileName: string): Promise<HighScore[]> {
  const text = await Deno.readTextFile(fileName);
  const lines = text.trim().split("\n");
  const highScores = [];

  for (const line of lines) {
    const [name, scoreText] = line.split(" ");
    const score = parseInt(scoreText)!;
    highScores.push({ name, score: score });
  }
  return highScores;
}

function findScoreIndex(highScores: HighScore[], score: number): number {
  for (let i = 0; i < highScores.length; i += 1) {
    if (highScores[i].score < score) {
      return i;
    }
  }
  return highScores.length;
}

function displayScores(highScores: HighScore[]): void {
  for (let i = 0; i < highScores.length; i += 1) {
    console.log(`${i + 1} ${highScores[i].name} ${highScores[i].score}`);
  }
}

async function saveScores(
  fileName: string,
  highScores: HighScore[]
): Promise<void> {
  let text = "";
  for (let i = 0; i < highScores.length; i += 1) {
    text += `${highScores[i].name} ${highScores[i].score}\n`;
  }
  await Deno.writeTextFile(fileName, text);
}

const userScore = parseInt(prompt("Enter score:")!);
const userName = prompt("Enter name:")!;

const highScores = await loadScores("objects/highScores.txt");

const scoreIndex = findScoreIndex(highScores, userScore);
const userHighScore = { name: userName, score: userScore };
highScores.splice(scoreIndex, 0, userHighScore);
const sliced = highScores.slice(0, 5);
await saveScores("objects/highScores.txt", sliced);

displayScores(sliced);

// Generate lyrics to "99 Bottles of Beer" programmatically.
// Instead of writing them out, line by line, express the repetitive nature of the lyrics in a single loop and display them on screen.

for (let i = 99; i > 1; i -= 1) {
  if (i >= 3) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(
      `Take one down, pass it around, ${i - 1} bottles of beer on the wall.`
    );
  } else {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(
      `Take one down, pass it around, ${i - 1} bottle of beer on the wall.`
    );
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down, pass it around, no more beer on the wall!");
  }
}

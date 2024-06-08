// Write four different programs that display four different rectangles by repeating the asterisk symbol * a certain number of times.
// The asterisks in the rectangles are horizontally separated by a single space.

// 5*8
for (let j = 1; j <= 8; j += 1) {
  let line = "";
  for (let i = 1; i <= 5; i += 1) {
    line += "* ";
  }
  console.log(line);
}

// 7*7
for (let j = 1; j <= 7; j += 1) {
  let line = "";
  for (let i = 1; i <= 7; i += 1) {
    line += "* ";
  }
  console.log(line);
}

// 10*5
for (let j = 1; j <= 5; j += 1) {
  let line = "";
  for (let i = 1; i <= 10; i += 1) {
    line += "* ";
  }
  console.log(line);
}

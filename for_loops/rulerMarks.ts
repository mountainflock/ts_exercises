// Display a vertical metric ruler with 30 sections, each section on a separate line.
// The zeroth section and each section that is a multiple of 10 should be denoted with a double equals == and the section number.
// Sections that are multiples of 5, but not multiples of 10, should be denoted with a double minus -- and the section number.
// The rest should be denoted by a single minus -.

for (let i = 0; i <= 30; i += 1) {
  if (i % 10 == 0) {
    console.log(`== ${i}`);
  } else if (i % 5 == 0) {
    console.log(`-- ${i}`);
  } else {
    console.log("-");
  }
}

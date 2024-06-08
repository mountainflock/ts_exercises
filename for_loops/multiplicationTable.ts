// Use nested loops to display a nicely-formatted multiplication table.
// It should show the results of multiplying numbers from 1 up to 10.
// The numbers in the table should be aligned vertically, with smaller numbers padded out on the left with a required amount of spaces.

let line1 = "";
for (let i = 1; i <= 10; i += 1) {
  if (i == 1) {
    line1 += ` ${i}   `;
  } else if (i == 9) {
    line1 += `${i}  `;
  } else {
    line1 += `${i}   `;
  }
}
console.log(` * |  ${line1}`);
let line2 = "";
for (let j = 1; j <= 40; j += 1) {
  line2 += `-`;
}
console.log(`---+${line2}`);

for (let k = 1; k <= 10; k += 1) {
  let line3 = "";
  for (let l = 1; l <= 10; l += 1) {
    if (l * k < 10) {
      line3 += `  ${l * k} `;
    } else if (l * k == 90) {
      line3 += ` ${l * k}`;
    } else {
      line3 += ` ${l * k} `;
    }
  }
  if (k == 10) {
    line3 = `${k} | ${line3}`;
  } else {
    line3 = ` ${k} | ${line3}`;
  }
  console.log(line3);
}

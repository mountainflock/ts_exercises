// Ask the user to enter a number.
// Split this number into individual digits, then convert it to a Morse code sequence
// and display the result on a single line.

const n = prompt("Enter a number:")!;
let line = "";
for (let i = 0; i < n.length; i += 1) {
  if (n[i] == "1") {
    line += ".---- ";
  } else if (n[i] == "2") {
    line += "..--- ";
  } else if (n[i] == "3") {
    line += "...-- ";
  } else if (n[i] == "4") {
    line += "....- ";
  } else if (n[i] == "5") {
    line += "..... ";
  } else if (n[i] == "6") {
    line += "-.... ";
  } else if (n[i] == "7") {
    line += "--... ";
  } else if (n[i] == "8") {
    line += "---.. ";
  } else if (n[i] == "9") {
    line += "----. ";
  } else {
    line += "----- ";
  }
}
console.log(`Code: ${line}`);

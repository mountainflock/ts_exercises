// Ask the user to enter a date and time in a format that your program can understand and convert from a string
// into date and time components.
// The user can also not enter anything, in which case you should default to the current date and time.

// Display the enterted date and time in US and UK formats, based on their individual components:
// year, month, day, hour, and minute.

const date = new Date();
const minutes = date.getMinutes();
const minutes0 = minutes < 10 ? `0${minutes}` : `${minutes}`;
const hours = date.getHours();
const hours0 = hours < 10 ? `0${hours}` : `${hours}`;
const day = date.getDate();
const day0 = day < 10 ? `0${day}` : `${day}`;
const month = date.getMonth() + 1;
const month0 = month < 10 ? `0${month}` : `${month}`;
const year = date.getFullYear();
const period = hours > 12 ? "PM" : "AM";
let hours12 = hours % 12;
if (hours12 == 0) {
  hours12 = 12;
}
console.log(`${month}/${day}/${year} ${hours12}:${minutes0} ${period}`);
console.log(`${day0}/${month0}/${year} ${hours0}:${minutes0}`);

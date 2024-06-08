// Write two functions.
// The first one accepts a number representing a year and checks whether that year is a leap year, returning a boolean.
// The other one accepts two numbers, one of them representing a year and another one from 1 to 12 representing a month.
// It returns the number of days in the given month in the given year.

// The second function should make use of the first function to check if the year is a leap year and adjust the number of days in February accordingly.

function isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function daysInMonth(year: number, month: number): number {
  if (month < 1 || month > 12) {
    throw "Invalid month";
  }
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    return 31;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  } else if (isLeapYear(year)) {
    return 29;
  } else {
    return 28;
  }
}

const date = new Date();
let leap = date.getFullYear();
while (!isLeapYear(leap)) {
  leap += 1;
}

console.log(`February, 2020 is ${daysInMonth(2020, 2)} days long.`);
console.log(`January, 2022 is ${daysInMonth(2022, 1)} days long.`);
console.log(`February, 2022 is ${daysInMonth(2022, 2)} days long.`);
console.log(`April, 2022 is ${daysInMonth(2022, 4)} days long.`);
console.log();
console.log(`The next leap year is ${leap}.`);

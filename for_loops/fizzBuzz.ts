// Write a program that displays the numbers from 1 to 100.
// But for numbers divisible by 3 display fizz instead of the number.
// For numbers divisible by 5 display buzz.
// For numbers divisible by both 3 and 5 display fizz buzz.

for (let i = 1; i <= 100; i += 1) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizz buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(`${i}`);
  }
}

// Ask the user to enter a number of minutes.
// Use integer division and the remainder operator to split these minutes
// into full days, hours, and the remaining minutes and show the result.

const x = parseInt(prompt("Minutes:")!);
console.log(
  `${Math.floor(x / 1440)}d ${Math.floor((x % 1440) / 60)}h ${Math.floor(
    (x % 1440) % 60
  )}m`
);

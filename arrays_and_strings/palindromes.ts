// Write a function that accepts a string and returns a boolean.
// If the string is a palindrome, it returns true. Otherwise, it returns false.

// Read the list of words from a file and into an array of strings.
// Then, use the function to find and display all palindromes from the words file, but only those that are at least 5 characters long.

const text = await Deno.readTextFile("/usr/share/dict/words");
const words = text.split("\n");

function isPalindrome(s: string): boolean {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i -= 1) {
    reversed += s[i];
  }
  return reversed == s;
}

for (let i = 0; i < words.length; i += 1) {
  if (isPalindrome(words[i]) && words[i].length >= 5) {
    console.log(words[i]);
  }
}

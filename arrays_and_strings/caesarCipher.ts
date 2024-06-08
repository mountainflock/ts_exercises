// Write a program that asks the user for a piece of text and a key, then encrypts the provided text using the Caesar cipher.
// Only capital letters of the latin alphabet are encrypted. All other characters should be left as-is.

function crypt(text: string, key: number): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (key < 0) {
    key = alphabet.length + key;
  }

  let encrypted = "";
  for (let i = 0; i < text.length; i += 1) {
    const index = alphabet.indexOf(text[i]);
    if (index != -1) {
      const encryptedIndex = (index + key) % alphabet.length;
      encrypted += alphabet[encryptedIndex];
    } else {
      encrypted += text[i];
    }
  }
  return encrypted;
}
const text = prompt("Enter text:")!;
const key = parseInt(prompt("Enter a key:")!);
console.log(crypt(text, key));

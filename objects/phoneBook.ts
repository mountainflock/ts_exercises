// Write a phonebook program that stores a list of names and phone numbers.
// It should be possible to add new ones and search through the list by name.
// Phonebook data is loaded from a text file when the program starts and saved each time the list is modified.
// Searching for a name should list all entries where a name contains the entered substring of characters.

// You can save and load phonebook data in JSON format or in any other plain text format.

type Entry = {
  name: string;
  phoneNumber: string;
};

async function readJSON(fileName: string): Promise<any> {
  const json = await Deno.readTextFile(fileName);
  return JSON.parse(json);
}

async function writeJSON(fileName: string, value: any): Promise<void> {
  const json = JSON.stringify(value);
  await Deno.writeTextFile(fileName, json);
}

async function add(
  phoneBook: Entry[],
  name: string,
  phoneNumber: string
): Promise<void> {
  phoneBook.push({ name, phoneNumber });
  await writeJSON("objects/phoneBook.json", phoneBook);
}

function search(phoneBook: Entry[], search: string): Entry[] {
  const found = [];
  const lowerSearch = search.toLowerCase();
  for (const entry of phoneBook) {
    if (entry.name.toLowerCase().includes(lowerSearch)) {
      found.push(entry);
    }
  }
  return found;
}

const phoneBook: Entry[] = await readJSON("objects/phoneBook.json");

while (true) {
  console.log();
  const action = prompt("[A]dd, [S]earch, [Q]uit?")!;
  if (action == "A") {
    const name = prompt("Enter name:")!;
    const number = prompt("Enter number:")!;
    await add(phoneBook, name, number);
    console.log("Ok!");
  } else if (action == "S") {
    const userSearch = prompt("Search:")!;
    console.log();
    const foundEntries = search(phoneBook, userSearch);
    for (const entry of foundEntries) {
      console.log(entry.name);
    }
  } else if (action == "Q") {
    console.log("Goodbye!");
    break;
  }
}

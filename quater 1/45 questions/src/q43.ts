// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

function show_magicians(names: string[]): void {
  for (let name of names) {
    console.log(name);
  }
}

function make_great(names: string[]): string[] {
  for (let i = 0; i < names.length; i++) {
    names[i] = "the great " + names[i];
  }
  return names;
}
console.log("\n orignal magicians");
console.log(show_magicians(magicians));
console.log("\n great magician");
console.log(make_great(magicians));

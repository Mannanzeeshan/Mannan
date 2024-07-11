// // Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(),
//   which prints the name of each magician in the array.
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
show_magicians(magicians);

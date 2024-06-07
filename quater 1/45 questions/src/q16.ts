/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let guestList: string[] = ["usman", "humail", "ashir"];
for (let i = 0; i < guestList.length; i++) {
  console.log(`Hi ${guestList[i]}, I invite you for a dinner at my home`);
}
let guestHowCantMakeit: string = guestList[1];
console.log(`\n\t${guestHowCantMakeit}, can't make it to the dinner
`);

guestList[1] = "Afaq";
for (let i = 0; i < guestList.length; i++) {
  console.log(` Hi ${guestList[i]}, I invite you for a dinner at my home`);
}
console.log("\n\t i just found a bigger dinner table.\n");

guestList.unshift("Moazan");

const indexToInsert = 2;
const newValue = "fahad";
guestList.splice(indexToInsert, 0, newValue);

guestList.push("wasi");

for (let i = 0; i < guestList.length; i++) {
  console.log(` Hi ${guestList[i]}, I invite you for a dinner at my home`);
}

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

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

console.log("\n\tSorry, we can only invite two people for dinner.\n");
for (let i = guestList.length - 1; i >= 2; i--) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
}

console.log("\n\t invitation for remaining guests\n");
for (let i = 0; i < guestList.length; i++) {
  console.log(` Hi ${guestList[i]}, I invite you for a dinner at my home`);
}

export default guestList;

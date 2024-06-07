"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let placesToVisit = [
    "Japan",
    "Paris",
    "USA",
    "France",
    "Dubai"
];
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order
console.log("\n\torignal form\n");
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}
// Print your array in alphabetical order without modifying the actual list.
console.log("\n\talphbetical form\n");
let sortedPlaces = [...placesToVisit].sort();
for (let i = 0; i < sortedPlaces.length; i++) {
    console.log(sortedPlaces[i]);
}
// Show that your array is still in its original order by printing it again.
console.log("\n\torignal form (again)\n");
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}
//  Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n\treverse order\n");
placesToVisit.reverse();
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n\tback to orignal form\n");
placesToVisit.reverse();
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n\tAlphabetical Order (Sorted Original Array)\n");
placesToVisit.sort();
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n\tsorted in reverse alphabetical order\n");
placesToVisit.sort().reverse();
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(placesToVisit[i]);
}

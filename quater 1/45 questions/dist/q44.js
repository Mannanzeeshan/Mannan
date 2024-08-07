"use strict";
// // Sandwiches: Write a function that accepts a array of
// items a person wants on a sandwich. The function
// should have one parameter that collects as many items as
// the function call provides, and it should print a summary
// of the sandwich that is being ordered. Call the function
// three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function order_sandwich(...items) {
    console.log("sandwich order summary");
    if (items.length === 0) {
        console.log("you ordered a plain sandwich");
    }
    else {
        for (let item of items) {
            console.log("- " + item);
        }
    }
}
order_sandwich("jelly", "cock");
order_sandwich("butter", "bread", "pizza");

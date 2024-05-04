"use strict";
let numberArray = [2, 5, 6];
function calculateProduct(numbers) {
    let product = 1;
    for (const num of numbers) {
        product *= num;
    }
    return product;
}
console.log(calculateProduct(numberArray));

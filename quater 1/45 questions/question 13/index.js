"use strict";
let numbers = [1, 2, 5, 8, 12];
function squareNumbers(numbers) {
    const squareNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squareNumbers.push(numbers[i] ** 2);
    }
    return squareNumbers;
}
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);

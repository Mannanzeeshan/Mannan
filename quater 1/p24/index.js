"use strict";
// Calculator Class
class Calculator {
    constructor() {
        this.currentNumber = '';
        this.storedValues = [];
    }
    // Method to append numbers and operators
    appendNumber(num) {
        this.currentNumber += num;
    }
    // Method to perform calculation
    calculate() {
        try {
            const result = Function(`return (${this.currentNumber})`)();
            if (!isNaN(result)) {
                this.storedValues.push(result);
            }
            else {
                throw new Error('Invalid expression');
            }
        }
        catch (error) {
            console.error('Error calculating:', error);
        }
        this.currentNumber = '';
    }
    // Method to get stored values
    getStoredValues() {
        return this.storedValues;
    }
}
// Function to display stored values
function displayStoredValues(calculator) {
    const storedValues = calculator.getStoredValues();
    console.log("Stored Values:", storedValues);
}
// Create a new calculator instance
const calculator = new Calculator();
// Function to take input from user
function takeInput() {
    const input = prompt('Enter a number or operator (e.g., 2, +, *, =)');
    if (input) {
        if (input === '=') {
            calculator.calculate();
            displayStoredValues(calculator);
        }
        else {
            calculator.appendNumber(input);
        }
    }
}
// Example usage
takeInput();
takeInput();
takeInput();
takeInput(); // To calculate

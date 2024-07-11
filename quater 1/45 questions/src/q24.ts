// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let string1 = "1";
let string2 = "2";
// equality
console.log(string1 === "1"); //true
console.log(string2 === "1"); //false

// inequality
console.log(string1 !== "2"); //true
console.log(string2 !== "2"); //false

// • Tests using the lower case function
let string3 = "hello";
let string4 = "WORLD";

// lower case equality
console.log(string3.toLowerCase() === "hello"); // true
console.log(string4.toLowerCase() === "hello"); //false

// lower case inequality
console.log(string3.toLowerCase() !== "world"); // True
console.log(string4.toLowerCase() !== "world"); // False

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 10;
let number2 = 20;
let number3 = 10;

// Equality
console.log(number1 === 10); // True
console.log(number2 === 10); // False

// Inequality
console.log(number1 !== 20); // True
console.log(number2 !== 20); // False

// Greater than
console.log(number2 > number1); // True
console.log(number1 > number2); // False

// Less than
console.log(number1 < number2); // True
console.log(number2 < number1); // False

// Greater than or equal to
console.log(number1 >= number3); // True
console.log(number1 >= number2); // False

// Less than or equal to
console.log(number1 <= number2); // True
console.log(number2 <= number1); // False

// • Tests using "and" and "or" operators
let a = 10;
let b = 20;
let c = 30;

// AND operator (&&)
console.log(a < b && b < c); //true
console.log(a > b && b < c); //false

// OR operator (||)
console.log(a < b || b > c); //true
console.log(a > b || b > c); //false

// • Test whether an item is in a array
let fruits = ["apple", "mango", "pear"];

// Item in array
console.log(fruits.includes("mango")); // True
console.log(fruits.includes("grape")); // False

// • Test whether an item is not in a array
console.log(!fruits.includes("grape")); //true
console.log(!fruits.includes("mango")); //false

// .1 hello variable
let greeting: string;
greeting = "hello, world!";
console.log(greeting);

// .2 basic math
let num1, num2: number;
num1 = 10;
num2 = 20;
// sum
let sum = num1 + num2;
console.log("sum",sum); //30
// difference
let diff = num1 - num2;
console.log("difference",diff); //-10
// product
let product = num1 * num2;
console.log("product",product); //200
// quotient
let quotient = num1 / num2;
console.log("quotieon",quotient); //0.5

// .3 swapping values
let a = 1;
let b = 2;
a = a + b;
b = a - b;
//now the value of (a) is 3 so 
a = a - b;
console.log(a);
console.log(b);

// .4 annotation(typescript)
let message: string;
// message = 1; (error)
//( because string can only hold alphabetic values)

// .5 modulus operator
let num3, num4;
num3 = 500;
num4 = 50;
let mod = num3 % num4;
console.log(mod);

// .6 increment challenge
let counter = 0;
counter++; //1
counter += 1; //2
console.log(counter);

// .7 logical gates
let a1 = true,
  b1 = false,
  c1 = true;
//AND Gate
console.log(a1 && b1 && c1); //false
// OR Gate
console.log(a1 || b1 || c1); //true
// NOT Gate
console.log(!a1); //false because a1 is true
console.log(!b1); //true because b1 is false
console.log(!c1); //false because c1 is true

// .8 Compound Assignment
let number = 10;
number += 10; //20
number -= 5; //15
number *= 2; //30
number /= 3; //10
console.log(number);

// .9 Even or Odd
let num5 = 56;
let result = num5 % 2;
if (result == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// .10 Voting Eligibility
let age;
age = 25;
if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible for voting");
}

// .11 Grading System
let score;
score = 74;
if (score >= 90) {
  console.log("you get (A+)");
} else if (score >= 80) {
  console.log("you get an (A)");
} else if (score >= 60) {
  console.log("you get an (B)");
} else if (score >= 50) {
  console.log("you get an (C)");
} else if (score >= 40) {
  console.log("you get an (D)");
} else {
  console.log("you are fail (F)");
}

// .12 Max of Three
let x, y, z;
x = 10;
y = 20;
z = 30;
if (x>=y&&x>=z){
  console.log(`${x} is largest`)
}else if (y>=x&&y>=z){
  console.log(`${y} is largest`)
}else {
  console.log(`${z} is largest`)
}

// .13 Leap Year Checker
let year: number;
year = 2024;
let IsLeapYear: boolean;
if (year % 4 == 0) {
  console.log("true");
} else {
  console.log("false");
}

// .14 Fahrenheit to Celsius Converter
let Fahrenheit: number;
Fahrenheit = 92;
let Celsius;
Celsius = ((Fahrenheit - 32) * 5) / 9;
console.log(Celsius);

// .15 Positive, Negative, or Zero
let number1:number;
number1 = 0;
if (number1>0){
  console.log("positive");
}else if (number1<0){
  console.log("negative")
}else{
  console.log("zero");
}

// .16 Multiplication Table
let number2 = 2;
console.log(`${number2*1}`);
console.log(`${number2*2}`);
console.log(`${number2*3}`);
console.log(`${number2*4}`);
console.log(`${number2*5}`);
console.log(`${number2*6}`);
console.log(`${number2*7}`);
console.log(`${number2*8}`);
console.log(`${number2*9}`);
console.log(`${number2*10}`);
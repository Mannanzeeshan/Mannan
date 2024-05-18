function sum(num1, num2) {
    let result = num1 + num2;
    console.log(`sum of ${num1} and ${num2} is ${result}`);
}
function sub(num1, num2) {
    let result = num1 - num2;
    console.log(`subtract of ${num1} and ${num2} is ${result}`);
}
function mul(num1, num2) {
    let result = num1 * num2;
    console.log(`multiplication of ${num1} and ${num2} is ${result}`);
}
function dev(num1, num2) {
    let result = num1 / num2;
    console.log(`devision of ${num1} and ${num2} is ${result}`);
}
function power(num1, num2) {
    let result = num1 ** num2;
    console.log(`power of ${num1} and ${num2} is ${result}`);
}
function mod(num1, num2) {
    let result = num1 % num2;
    console.log(`modulo of ${num1} and ${num2} is ${result}`);
}
export { sum, sub, mul, dev, power, mod };

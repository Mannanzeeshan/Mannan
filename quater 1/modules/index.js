import inquirer from "inquirer";
import { sum, sub, mul, dev, mod } from "./operators.js";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter your first number:",
    },
    {
        type: "number",
        name: "num2",
        message: "enter your second number:",
    },
    {
        type: "list",
        name: "operator",
        message: "chose youre Operators:",
        choices: ["+", "-", "*", "/", "**"],
    },
]);
if (answers.operator == "+") {
    console.log("This is Sum");
    sum(answers.num1, answers.num2);
}
else if (answers.operator == "-") {
    console.log("This is Subtract");
    sub(answers.num1, answers.num2);
}
else if (answers.operator == "*") {
    console.log("This is Multiple");
    mul(answers.num1, answers.num2);
}
else if (answers.operator == "/") {
    console.log("This is Division");
    dev(answers.num1, answers.num2);
}
else if (answers.operator == "**") {
    console.log("This is modulos");
    mod(answers.num1, answers.num2);
}
else {
    console.log("Invalid Operator");
}

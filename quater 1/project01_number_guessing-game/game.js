import inquirer from "inquirer";
const randomNoGenrator = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess B/W 1 to 10"
    }
]);
const { userguess } = answer;
console.log(userguess, "your guess", randomNoGenrator, "systum guess");
if (userguess === randomNoGenrator) {
    console.log("yaaa you guess the write answer,you won!");
}
else {
    console.log("you'r wrong better luck next time!");
}

import inquirer from "inquirer";
let ans = await inquirer.prompt([{
  type:"inpu",
  name:"words",
  message:"enter your sentance"

}])
let word_counter = ans.words.trim().split(" ").length
console.log(`your sentance has ${ word_counter} words.`)

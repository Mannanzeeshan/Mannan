import inquirer from "inquirer";
let todo_list: string[] = [];
let while_condition: boolean = true;
while (while_condition === true) {
  let option = await inquirer.prompt([
    {
      type: "list",
      name: "user_option",
      message: "selact an option",
      choices: ["add", "remove"],
    },
  ]);
  // add
  if (option.user_option === "add") {
    let ans = await inquirer.prompt([
      {
        type: "input",
        name: "user_add",
        message: "write somthing you want to add in your to-do-list",
      },
    ]);
    if (ans.user_add !== "") {
      todo_list.push(ans.user_add);
      console.log(todo_list);
    } else {
      console.log("please write somthing to add in your to-do-list");
    }
  }
  //   remove
  else if (option.user_option === "remove") {
    let removeChoice = await inquirer.prompt([
      {
        type: "list",
        name: "remove_item",
        message: "select item to remove",
        choices: todo_list,
      },
    ]);
    let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
    if (index_to_remove >= 0) {
      todo_list.splice(index_to_remove, 1);
      console.log("you  remooved :", removeChoice.remove_item);
      console.log(todo_list);
    }
  }

  //   confirmation
  let user_add = await inquirer.prompt([
    {
      type: "confirm",
      name: "Selection",
      message: "do you want to continue?",
      default: true,
    },
  ]);
  if (user_add.Selection === false) {
    while_condition = false;
  }
}

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["john", "khan", "mannan", "usman", "afaq"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["JOHN", "moazan", "ahil", "mike", "alex"];

// first convert all usernames to lower case
for (let i = 0; i < current_users.length; i++) {
  current_users[i] = current_users[i].toLowerCase();
}

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (let i = 0; i < new_users.length; i++) {
  // Convert the new username to lowercase
  let new_user = new_users[i].toLowerCase();

  // Check if the new username is already in the current_users list
  if (current_users.includes(new_user)) {
    console.log(
      `The username '${new_users[i]}' is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username '${new_users[i]}' is available.`);
  }
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

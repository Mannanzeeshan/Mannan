// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let Names: string[] = ["Usman", "Humail", "Afaq", "Wasi"];
for (let i = 0; i < Names.length; i++) {
  console.log(`Hi ${Names[i]},hope you're having a great day.`);
}

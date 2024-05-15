"use strict";
function wordStartWithA() {
    let words = ["apple", "mango", "bannana", "avacado"];
    return words.filter(word => word.toLowerCase().startsWith('a'));
}
const wordsStartingWithAAray = wordStartWithA();
console.log(wordsStartingWithAAray);

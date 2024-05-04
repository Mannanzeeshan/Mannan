function wordStartWithA():string[]{
let words:string[]=["apple","mango","bannana","avacado"];
return words.filter(word => word.toLowerCase().startsWith('a'));
}
const wordsStartingWithAAray:string[]=wordStartWithA();
console.log(wordsStartingWithAAray);
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface fruitstype {
  name: string;
  price: number;
}
let fruits: fruitstype[] = [
  {
    name: "Mango",
    price: 150,
  },
  {
    name: "banana",
    price: 200,
  },
  {
    name: "Apple",
    price: 180,
  },
  {
    name: "pear",
    price: 190,
  },
];

console.log("objects of fruits ", fruits);

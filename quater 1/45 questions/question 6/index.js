"use strict";
function CalculateArea(radius) {
    const area = 3.14 * radius ** 2;
    return area;
}
const radius = 5;
const area = CalculateArea(radius);
console.log(`the area of ${radius} is ${area}`);

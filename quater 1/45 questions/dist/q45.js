"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, color, sunroof) {
    const carInfo = {
        manufacturer,
        modelName,
    };
    if (color) {
        carInfo.color = color;
    }
    if (sunroof !== undefined) {
        carInfo.sunroof = sunroof;
    }
    return carInfo;
}
const myCar = createCar("Toyota", "Camry", "blue", true);
console.log("My car details:");
console.log(myCar);

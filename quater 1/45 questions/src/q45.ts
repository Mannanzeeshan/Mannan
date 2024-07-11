// Cars: Write a function that stores information about a 
// car in a Object. The function should always receive a manufacturer
//  and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pair, 
//  such as a color or an optional feature. Print the Object that’s returned to make 
//  sure all the information was stored correctly.


interface Car {
  manufacturer: string;
  modelName: string;
  color?: string;
  sunroof?: boolean;
}
function createCar(manufacturer: string, modelName: string, color?: string, sunroof?: boolean): Car {
  const carInfo: Car = { manufacturer, modelName };

  if (color) carInfo.color = color;
  if (sunroof !== undefined) carInfo.sunroof = sunroof;

  return carInfo;
}

const myCar = createCar("Toyota", "Camry", "blue", true);
console.log("My car details:");
console.log(myCar);
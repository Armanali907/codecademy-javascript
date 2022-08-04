// Assigning kelvin value
const kelvin = 301;
//converting the value of kelvin in celcius
let celsius = kelvin - 273;
//converting the celcius value into fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Round off the value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

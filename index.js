console.log('Hello World!!')
console.log(global)
console.log(process)

const {generateRandomNumber, convertCelsiusToFahrenheit} = require('./utils');
console.log(`Random number: ${generateRandomNumber()}`);
console.log(`Convert Celsius to Fahrenheit: ${convertCelsiusToFahrenheit(0)}`);
// const {generateRandomNumber, convertCelsiusToFahrenheit} = require('./utils');
// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Convert Celsius to Fahrenheit: ${convertCelsiusToFahrenheit(0)}`);

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Post lenght: ${getPostsLength()}`);

// The variable Kelvin is 293; this is the original variable and will remain constant.
const kelvin = 293;
// I set a new variable 'celsius' to constanly be 273 degrees less than kelvin
const celsius = (kelvin - 273);
// I set a new variable for fahrenheit and the formula to solve from celsius
var fahrenheit = (celsius * (9 / 5) + 32);
// The fahrenehit variable will be rounded to the lowest whole number 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = (celsius * (33/100));
newton = Math.floor(newton);
console.log(`The temperature is ${newton} is degrees Newton.`);

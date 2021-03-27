/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

function addBinary(a, b) {
  const sum = a + b;

  return toBinary(sum); 
}

function toBinary(sum) {
  if (sum === 0) {
    return '0';
  }

  let binary = '';
  while (sum > 0) {
    const remainder = sum % 2;
    binary = remainder + binary;
  
    sum = Math.floor(sum / 2);
  }
  return binary;
}

console.log(addBinary(100, 256));
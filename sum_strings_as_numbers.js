/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

// This only works for smaller numbers
function sumStrings(a, b) {
  // convert to numbers, add them, and convert them back to string
  return (Number(a) + Number(b)).toString();
}


// Implementing adder with carrying digits

function sumStrings2(a, b) {

  // padding shorter number with leading zeros
  if (a.length < b.length) {
    while (a.length != b.length) {
      a = '0' + a;
    }
  } else if (b.length < a.length) {
    while (a.length != b.length) {
      b = '0' + b;
    }
  }  
  // store the sum
  let sum = '';  
  let carry = 0;
  // iterate the length of the longer number from right to left

  for (let i = a.length - 1; i >= 0; i--) {
    // add current number in each number
    // if the result is greater than 9
      // store the carrier     
    const aNum = +a[i];
    const bNum = +b[i];
    const innerSum = aNum + bNum + carry;

    let placeNum = innerSum;

    if (innerSum > 9) {
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10);
    } else {
      carry = '';
    }
    sum = placeNum + sum;
  }
    // prepend the sum of the current numbers to the result
  sum = carry + sum;

  while (sum[0] == '0') {
    sum = sum.slice(1);
  }
  return sum;
}
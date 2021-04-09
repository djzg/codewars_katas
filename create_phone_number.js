/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

function createPhoneNumber(numbers){
  
  // place to store the phone number
  // append a ( parenthesis
  let phoneNumber = '(';
  // append the first three numbers in the array
  phoneNumber += (numbers[0].toString() + numbers[1].toString() + numbers[2].toString());
  // append a ) parenthesis
  // append space
  phoneNumber += ') '
  // append the next three numbers in the array
  phoneNumber += (numbers[3].toString() + numbers[4].toString() + numbers[5].toString());
  // append -
  phoneNumber += '-';
  // append the last three numbers in the array
  phoneNumber += (numbers[6].toString() + numbers[7].toString() + numbers[8].toString() + numbers[9].toString());

  // return phone number
  return phoneNumber;
}


function createPhoneNumber2(numbers){
  let phoneNumber = '(';
  phoneNumber += ('' + numbers[0] + numbers[1] + numbers[2]);
  phoneNumber += ') '
  phoneNumber += ('' +numbers[3] + numbers[4] + numbers[5]);
  phoneNumber += '-';
  phoneNumber += ('' + numbers[6] + numbers[7] + numbers[8] + numbers[9]);

  return phoneNumber;
}

// Using template strings

function createPhoneNumber3(numbers){
  let phoneNumber = '(';
  phoneNumber += `${numbers[0]}${numbers[1]}${numbers[2]}`;
  phoneNumber += ') '
  phoneNumber += `${numbers[3]}${numbers[4]}${numbers[5]}`;
  phoneNumber += '-';
  phoneNumber += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return phoneNumber;
}

function createPhoneNumber3(numbers){
  let phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return phoneNumber;
}

// Using slice
function createPhoneNumber4(numbers){ 
  let phoneNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 7).join('')}-${numbers.slice(7).join('')}`;

  return phoneNumber;
}

// Using slice cleaned up
function createPhoneNumber5(numbers){ 
  const j = (n) => n.join('');
  let phoneNumber = `(${j(numbers.slice(0, 3))}) ${j(numbers.slice(3, 7))}-${j(numbers.slice(7))}`;

  return phoneNumber;
}

// Using slice cleaned up #2
function createPhoneNumber6(numbers){ 
  const j = (n, b, e) => n.slice(b, e).join('');
  let phoneNumber = `(${j(numbers, 0, 3)}) ${j(numbers, 3, 7)}-${j(numbers, 7)}`;

  return phoneNumber;
}

// Using RegEx
function createPhoneNumber7(numbers) {
  return numbers.join('').replace(/([\d]{3})([\d]{3})([\d]{4})/, '($1) $2-$3');

}
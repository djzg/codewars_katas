/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {  
  // find two smallest numbers
  // place to store the smallest number
  let smallest;
  // place to store the second smallest number
  let secondSmallest;

  // compare the first two numbers in the array
    // set the smallest number variable and second smallest variable
  if (numbers[0] < numbers[1]) {
    smallest = numbers[0];
    secondSmallest = numbers[1];
  } else {
    smallest = numbers[1];
    secondSmallest = numbers[0];
  }

  // iterate over numbers, starting on 2nd index
  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // compare with smallest
      // if current number is smaller than the smaller variable
        // set smallest variable to be the second smallest number
        // set the current number to be the smallest number    
    if (currentNumber < smallest) {
      secondSmallest = smallest;
      smallest = currentNumber;
      // else if the current number is smaller than the second smallest number
        // set the second smallest number to the current number    
      } else if (currentNumber < secondSmallest) {
      secondSmallest = currentNumber;
      
    }
  }
    // return the sum of two smallest numbers
  return smallest + secondSmallest;  

}


// Using built-in methods
function sumTwoSmallestNumbers2(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min.apply(null, numbersWithoutSmallest);

  return smallest + secondSmallest;
}


// Using spread operator
function sumTwoSmallestNumbers3(numbers) {
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min.apply(...numbersWithoutSmallest);

  return smallest + secondSmallest;
}

// Using sort method
function sumTwoSmallestNumbers4(numbers){  
  numbers = numbers.sort(function(a, b){
    return a - b; 
  });
  
  return numbers[0] + numbers[1];
};
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr) {
  // initialize maxSum to 0
  let maxSum = 0;
 // iterate from 0 to end of array - i
 for (let i = 0; i < arr.length; i++) {
  // iterate from current index to end of array - j
   for (let j = i; j < arr.length; j++) {
    // place to store sum of current subarray
    let currentSum = 0;
    let subArray = [];
    // iterate from i to j
    for (let k = i; k < j; k++) {
      // sum all numbers
      currentSum += arr[k];
      subArray.push(arr[k]);
    }
    console.log(subArray, currentSum);
    // if currentSum is greater than maxSum
    if (currentSum > maxSum) {
      //set currentSum 
      maxSum = currentSum;
    }
   }
 }
// return maxSum 
 return maxSum;
}

// Kadane's algorythm

var maxSequence2 = function (arr) {
  // place to keep track of currentSum
  let currentSum = 0;
  // place to keep track of maxSum
  let maxSum = 0;
  
  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
  // set currentSum to max of currentSum + currentNumber and 0
    currentSum = Math.max(currentNumber + currentSum, 0);
    // set maxSum to max of currentSum and maxSum
    maxSum = Math.max(currentSum, maxSum);
  }

  // return maxSum  
  return maxSum;
}

// Reduce function

var maxSequence3 = function(arr){
  var currentSum = 0;
  return arr.reduce(function(maxSum, number){
      currentSum = Math.max(currentSum+number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
}
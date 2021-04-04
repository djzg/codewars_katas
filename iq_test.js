/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers){
  debugger; // debugging inside chrome://inspect
  // split the string into an array
  numbers = numbers.split(' ');
  // keep track of even count and last index we saw of even
  const even = {
    count: 0,
    lastIndex: -1
  };
  // keep track of odd count, and the last index we saw of odd
  const odd = {
    count: 0,
    lastIndex: -1
  };
  // iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // if even, increment even count and store index
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    // if odd, increment odd count and store index    
    } else {
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }
  // if even count is 1, return last even index we saw
  if (even.count == 1) {
    return even.lastIndex;
  // else if the odd count is 1, return the last odd index we saw
  } else if (odd.count == 1){
    return odd.lastIndex;
  }
}
debugger;



console.log(iqTest("2 4 7 8 10"),3);
console.log(iqTest("1 2 2"), 1);

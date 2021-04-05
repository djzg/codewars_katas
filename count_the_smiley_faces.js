/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

function countSmileys(arr) {
  // place to keep track of the current count
  let count = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];
    // iterate over the current face if the length of the face is either 2 or 3
    if (face.length == 2 || face.length == 3) {
      // if the first character is a : or ;
      if (face[0] == ':' || face[0] == ';') {
        // if the second character is a - or ~
        if (face[1] == '-' || face[1] == '~') {
          // if the third characcter is a ) or D
          if (face[2] == ')' || face[2] == 'D') {
            // increment count     
            count++;
          }
        // else if the second character is a ) or D and the length is 2 
        } else if ((face[1] == ')' || face[1] == 'D') && face.length == 2) {
          // increment count         
          count++;
        }
      }
    }
  }
  // return count
  return count;    
}


// Using objects

function countSmileys2(arr) {
  let count = 0;

  const eyes = {
    ':': true,
    ';': true
  };
  const noses = {
    '-': true,
    '~': true
  };  
  const mouths = {
    ')': true,
    'D': true
  };  
  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];
    if (face.length == 2 || face.length == 3) {
      if (eyes[face[0]]) {
        if (noses[face[1]]) {
          if (mouths[face[2]]) {
            count++;
          }
        } else if ((mouths[face[1]]) && face.length == 2) {
          count++;
        }
      }
    }
  }
  return count;    
}


// More cleaned 
function countSmileys3(arr) {
  let count = 0;

  const eyes = {
    ':': true,
    ';': true
  };
  const noses = {
    '-': true,
    '~': true
  };  
  const mouths = {
    ')': true,
    'D': true
  };  
  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];
    if (face.length == 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      } else if (face.length == 3) {
        if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
          count++
        }
      }
    }
  }
  return count;    
}


// Using reduce 
function countSmileys4(arr) {
  const eyes = {
    ':': true,
    ';': true
  };
  const noses = {
    '-': true,
    '~': true
  };  
  const mouths = {
    ')': true,
    'D': true
  };  
  return arr.reduce((count, face) => {
    if (face.length == 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      } else if (face.length == 3) {
        if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
          count++
        }
      }
    }
    return count;
  }, 0);
}
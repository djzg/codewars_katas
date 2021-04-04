/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {

  // if array length is not 10, immediately return false
  if (walk.length != 10) return false;
  
  // keep track of north count
  // keep track of south count
  // keep track of west count
  // keep track of east count
  const counts = {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  }

  // iterate over array
  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i]
    //increase given direction count   
    counts[direction]++;
  }

  // if north count - south count is 0 AND west count - east count is 0, return true
  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  // else return false
  } else {
    return false;
  }
}




console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');


// Using reduce function

function isValidWalk2(walk) {

  // if array length is not 10, immediately return false
  if (walk.length != 10) return false;

  return counts = walk.reduce((counts, direction, index) => {
    counts[direction]++;
    if (index < walk.length - 1) {
      return counts;
    } else if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
        return true;
    } else {
      return false;
    }
  }, {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  });
}
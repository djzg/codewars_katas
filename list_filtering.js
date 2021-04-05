/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

function filter_list(items) {
  // place to store filter results
  const filtered = [];

  // iterate over array
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    // if the current item is a number
    if (typeof currentItem === 'number') {
      // push into filtered results    
      filtered.push(currentItem);
    }
  } 
  // return the filtered results
  return filtered;
}

// Using filter function
function filter_list2(items) {
  return items.filter((currentItem) => {
    // if current item is number, return it
    return typeof currentItem === 'number';
  })
}
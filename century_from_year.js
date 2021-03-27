/*
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
*/

function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }
  return century;
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

// one-line function
function century2(year) {
  return year % 100 > 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
}

console.log(century2(1705), 18, 'Testing for year 1705');
console.log(century2(1900), 19, 'Testing for year 1900');
console.log(century2(1601), 17, 'Testing for year 1601');
console.log(century2(2000), 20, 'Testing for year 2000');
console.log(century2(89), 1, 'Testing for year 89');
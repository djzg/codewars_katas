/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(totalSeconds) {
  // get total hours by dividing seconds by 3600 and drop the remainder
  const hours = Math.floor(totalSeconds / 3600);
  // get total minutes by dividing remainder seconds by 60 and drop the remainder
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  // total seconds is the previous remainder
  const seconds = (totalSeconds % 3600) - minutes * 60;

  const padNumber = (number) => {
    let numberString = number.toString();
    if (numberString.length == 1) {
      numberString = '0' + numberString;
    }
    return numberString;
  };
    // append hours, minutes and seconds in a string with a padded zero if needed
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}


// Using padStart()

function humanReadable(totalSeconds) {
  // get total hours by dividing seconds by 3600 and drop the remainder
  const hours = Math.floor(totalSeconds / 3600);
  // get total minutes by dividing remainder seconds by 60 and drop the remainder
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  // total seconds is the previous remainder
  const seconds = (totalSeconds % 3600) - minutes * 60;

  const padNumber = (number) => number.toString().padStart(2, '0');
    // append hours, minutes and seconds in a string with a padded zero if needed
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

// Cleaned version

function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const padNumber = (number) => number.toString().padStart(2, '0');
    // append hours, minutes and seconds in a string with a padded zero if needed
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

// Another version
function humanReadable(totalSeconds) {
  const hours = parseInt(totalSeconds / 3600);
  const minutes = parseInt(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;

  const pad = function (val) {
    return val < 10 ? '0' + val : val;
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
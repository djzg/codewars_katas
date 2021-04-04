/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all
*/

function DNAStrand(dna) {
  // place to store the complement string
  let complement = '';
  
  // iterate over DNA
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    // if the current letter is an A, append a T
    if (currentLetter == 'A') {
      complement += 'T';
    // else if the current letter is a T, append an A
    } else if (currentLetter == 'T') {
      complement += 'A';
    // else if the current letter is a C, append a G
    } else if (currentLetter == 'C') {
      complement += 'G';
    // else if the current letter is a G, append a C    
    } else if (currentLetter == 'G') {
      complement += 'C';
    }   
  }
  // return complement string
  return complement;
}


// Using object
function DNAStrand2(dna) {
  // place to store the complement string
  let complement = '';
  let complements = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  
  // iterate over DNA
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    complement += complements[currentLetter];
  }
  // return complement string
  return complement;
}


// Using map function
function DNAStrand3(dna) {
  // place to store the complement string
  let complements = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  return dna.split('').map(letter => complements[letter]).join('');
}


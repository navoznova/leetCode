// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Input: s = "Hello World"
// Output: 5

function lengthOfTheBiggestWord(s) {
  let biggerWord = "";
  let correntWord = "";

  for (let i of s) {
    if (i !== " ") {
      correntWord += i;
    } else {
      correntWord = '';
    }

    if (biggerWord.length < correntWord.length) {
      biggerWord = correntWord;
    }
  }
  return biggerWord.length;
}

lengthOfTheBiggestWord("is joyboy");

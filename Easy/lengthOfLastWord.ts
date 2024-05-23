// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Input: s = "Hello World"
// Output: 5

function lengthOfTheLastWord(s) {
  let lastWord = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastWord += s[i];
    }
    if (s[i - 1] === " " && lastWord !=='') {
      return lastWord.length;
    }
  }
  return lastWord.length;
}

lengthOfTheLastWord("   fly me   to   the moon  ");

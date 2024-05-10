// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const firstWord = strs[0];

  for (let letterIndex = 0; letterIndex < firstWord.length; letterIndex++) {
    for (let wordIndex = 1; wordIndex < strs.length; wordIndex++) {
      const currentWord = strs[wordIndex];

      if (letterIndex > currentWord.length - 1 || firstWord[letterIndex] !== currentWord[letterIndex]) {
        return prefix;
      }
    }

    prefix = prefix + firstWord[letterIndex];
  }

  return prefix;
}

// longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["ab", "a"]);

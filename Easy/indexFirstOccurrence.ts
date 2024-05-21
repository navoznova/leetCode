// Input: haystack = "butsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

function indexFirstOccurrence(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < needle.length; j++) {
        console.log(needle[j], haystack[i + j]);
        if (needle[j] !== haystack[i + j]) {
          break
        }
        if (j === needle.length - 1) {
          return i
        }
      }
    }
    return -1
  }

indexFirstOccurrence("mississippi", "issip");

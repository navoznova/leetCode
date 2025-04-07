// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function validParentheses(str) {
  const vocabulary = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const res = [];

  for (let char of str) {
    let lastElemInRes = res[res.length-1];
    if (vocabulary[char]) {
      res.push(char);
    } else if (res.length === 0 && !vocabulary[char]) {
      return false;
    } else if (vocabulary[lastElemInRes] === char) {
      res.pop();
    }
  }

  return !res.length;
}

// function validParentheses(str) {
//   const templeOpen = "(";
//   const res = [];

//   for (let char of str) {
//     if (res.length === 0 && char !== templeOpen) {
//       return false;
//     }

//     char === templeOpen ? res.push(char) : res.pop();
//   }

//   return !res.length;
// }

// function validParentheses(str) {
//     const stack = [];
//     const brackets = {
//         ')': '(',
//         '}': '{',
//         ']': '['};

//     for (let char of str) {
//         if(brackets[char]) {
//             const lastElement = stack.pop();
//             if (brackets[char] !== lastElement) { // Проверяем соответствие открывающей скобки
//                 return false;
//             }
//         } else {
//             stack.push(char);
//         }
//     }
//     return stack.length === 0;
// };

console.log(validParentheses("({[]})"));

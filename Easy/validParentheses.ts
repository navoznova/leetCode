// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function validParentheses(str) {
    const stack: string[] = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['};

    for (let char of str) {
        if(brackets[char]) {
            const lastElement = stack.pop();
            if (brackets[char] !== lastElement) { // Проверяем соответствие открывающей скобки
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

validParentheses('{}')
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


function isPalindrome(x: number): boolean {
    const xString = String(x);

    for (let i = 0; i < xString.length / 2; i++) {
        if (xString[i] !== xString[xString.length - i - 1]) {
            return false;
        }
    }

    return true;
};

isPalindrome(122)
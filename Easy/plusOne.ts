// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Input: digits = [1,2,3]
// Output: [1,2,4]

function plusOne(s) {
  let str = s.join('');
  let num = Number(str);;
  let sum = num+1;
  return Array.from(String(sum), Number);
}

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

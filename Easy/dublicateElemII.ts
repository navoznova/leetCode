//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
function containsDuplicateII(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length && j - i <= k; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }

  return false;
}

let nums = [1, 2, 3, 1, 2, 3];
let k = 2;

console.log(containsDuplicateII(nums, k));

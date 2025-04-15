//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
function containsDuplicateII(nums, k) {
  let dictionary = new Map();

  for (let i = 0; i<nums.length; i++) {
    let a = nums[i]
    if(dictionary.has(a) && i - dictionary.get(nums[i]) <= k) {
        return true;
    } else {
      dictionary.set(nums[i], i);
    }
  }

  return false;
}

let nums = [1, 2, 3, 1, 2, 3];
let k = 2;

console.log(containsDuplicateII(nums, k));

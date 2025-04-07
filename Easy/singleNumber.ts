//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
  let res = 0;

  for (let num of nums) {
    res ^= num;
  }

  return res;
}

let nums = [4, 2, 2, 4, 3];

console.log(singleNumber(nums));

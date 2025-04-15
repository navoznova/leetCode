//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
  const unique = new Set();
  for(let num of nums) {
    if(unique.has(num)) {
      return true;
    } else {
      unique.add(num);
    }
  }
  return false
}

let nums = [5, 1, 2, 3, 1];

console.log(containsDuplicate(nums));

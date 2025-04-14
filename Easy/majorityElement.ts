//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

function majorityElement(nums) {
  let majorElem = 0;
  let repeats = 0;

  for(let num of nums) {
    if (repeats === 0) {
      majorElem = num;
    }

    repeats += (num === majorElem) ? 1 : -1;
  }
  // let res = {};
  // for (let num of nums) {
  //   res[num] ? (res[num] += 1) : (res[num] = 1);
  // }

  // let repeats = Object.values(res)
  // let maxVal = Math.max(...repeats);
  // let indexOfMaxVal = repeats.indexOf(maxVal);

  return majorElem;
}

let nums = [4, 2, 2, 2, 3, 3];

console.log(majorityElement(nums));

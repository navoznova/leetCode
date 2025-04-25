//Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
function summaryRanges(nums) {
  let res = [];
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 || nums[i + 1] - nums[i] > 1) {
      if (start === nums[i]) {
        res.push(start.toString());
      } else {
        res.push(`${start}->${nums[i]}`);
      }
      start = nums[i + 1];
    }
  }

  return res;
}

let nums = [6, 7];

console.log(summaryRanges(nums));

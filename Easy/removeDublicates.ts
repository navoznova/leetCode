// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDublucates(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
    
};

removeDublucates([1,1,1])
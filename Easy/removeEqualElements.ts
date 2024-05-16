// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeEqualElements(nums, val) {
    for (let i = 0; i < nums.length;){
        if (nums[i] === val){
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

removeEqualElements([3,2,2,3], 3)
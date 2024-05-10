// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function sumOfTwo(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
        let term1 = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let term2 = nums[j];
            
            if (term1 + term2 === target) {
                return [i, j];
            }
        }
    }
};

sumOfTwo([2,7,11,15], 9)
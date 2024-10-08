function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (target - nums[i] === nums[j]) {
        return [i, j];
      }
    }
  }
}

function twoSumHash(nums, target) {
  const hashTable = new Map(nums.map((value, index) => [value, index ]));
  for (var i = 0; i < nums.length; i++) {
    if (hashTable.has(target - nums[i]) && hashTable.get(target - nums[i]) !== i){
      return [i, hashTable.get(target - nums[i])];
    }
  }
  return [];
}

twoSumHash([3, 2, 4], 6);

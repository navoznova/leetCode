let nums1 = [2, 5, 6, 0, 0, 0];
let m = 3;
let nums2 = [1, 2, 3];
let n = 3;

function mergeTwoSortedArray(arr1, m, arr2, n) {
  let indexToAdd = n + m - 1;
  let i = 1;
  let j = 1;
  let currentElemArr1 = arr1[m - i];
  let currentElemArr2 = arr2[n - j];

  while (j <= n) {
    if (currentElemArr1 > currentElemArr2) {
      arr1[indexToAdd] = currentElemArr1;
      i++
      currentElemArr1 = arr1[m - i];
    } else {
      arr1[indexToAdd] = currentElemArr2;
      j++
      currentElemArr2 = arr2[n - j];
    }
    indexToAdd--;
  }
}

console.log(mergeTwoSortedArray(nums1, m, nums2, n));
console.log(nums1);

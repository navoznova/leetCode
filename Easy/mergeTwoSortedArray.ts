

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

function mergeTwoSortedArray(arr1, m, arr2, n) {
  let lastArr1Elem = arr1[m-1];//3
  let lastArr2Elem = arr2[n-1];//2
  let countCommon = 1;
  let countArr1 = 1;

  for (let i = n-1; i >= 0; i--) {
    lastArr2Elem = arr2[i];

    if(lastArr1Elem < lastArr2Elem) {
      arr1[m+n-countCommon] = lastArr2Elem;
    } else {
      arr1[m+n-countCommon] = lastArr1Elem;
      arr1[m-countArr1] = lastArr2Elem;
      countArr1++;
      lastArr1Elem = arr1[m-countArr1];
    }

    countCommon++;
  }
 
}

console.log(mergeTwoSortedArray(nums1, m, nums2, n));
console.log(nums1);


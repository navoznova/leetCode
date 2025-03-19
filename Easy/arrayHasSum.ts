function hasSum(arr, sum) {
  const seen = new Set();
  
  for (let num of arr) {
    if (seen.has(sum - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;


  // for (let i = 0; i < arr.length; i++) {
  //   let arg = sum - arr[i];
  //   if(arr.indexOf(arg) !== -1 && arr.indexOf(arg) !== i) {
  //     return true;
  //   }
    
  // }
  // return false;
}

console.log(hasSum([3, 4, 7, 10], 8));//false
console.log(hasSum([1, 4, 4, 9], 8));//true

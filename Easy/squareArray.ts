function squareArray(arr) {
  const resualt = []
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let resualtElemIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let leftNumber = arr[leftIndex]*arr[leftIndex];
    let rightNumber = arr[rightIndex]*arr[rightIndex];
    
    if(leftNumber > rightNumber) {
      resualt[resualtElemIndex] = leftNumber;
      leftIndex++;
      resualtElemIndex--;
    }else {
      resualt[resualtElemIndex] = rightNumber;
      rightIndex--;
      resualtElemIndex--;
    }
  }
  return resualt;
}

console.log(squareArray([-4, -1, 0, 3, 10])); //[0, 1, 9, 16, 100]

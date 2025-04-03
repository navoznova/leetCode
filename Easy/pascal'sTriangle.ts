//Given an integer numRows, return the first numRows of Pascal's triangle.

function generate(numRows) {
  let result = Array(numRows);
  let previousArr = [1];
  result[0] = previousArr;

  for (let i = 1; i < numRows; i++) {
    let currentArr = Array(i + 1);
    let indexOfPreviousArr = 0;
    currentArr[0] = 1;
    currentArr[currentArr.length - 1] = 1;

    for (let j = 1; j < currentArr.length - 1; j++) {
      currentArr[j] = previousArr[indexOfPreviousArr] + previousArr[indexOfPreviousArr + 1];
      indexOfPreviousArr++;
    }
    
    previousArr = currentArr;
    result[i] = currentArr;
  }

  return result;
}

console.log(generate(5));

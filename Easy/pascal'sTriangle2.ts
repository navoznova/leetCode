//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

function generateRow(index) {
  let numRows = index +1;
  let previousArr = [1];

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
  }

  console.log(previousArr);

  return previousArr;
}

console.log(generateRow(3));
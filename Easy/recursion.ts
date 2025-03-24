function getSum(n) {
  // 1way
  // let sum = 0;
  // for(let i=1; i<=n;){
  //   sum +=i;
  //   i++
  // }
  // return sum;

  if (n === 1) {
    return 1;
  }

  return n + getSum(n - 1);
}

function getFac(n) {
  return n === 1 ? 1 : n * getFac(n - 1);
}

function getFib(n) { // 1,1,2,3,5,8
  if (n<=1) {
    return n;
  }
  return getFib(n - 1) + getFib(n - 2);
  // let first = 1;
  // let second = 1;
  // let res = 1;

  // for(let i = 2; i< n; i++){
  //   res = first + second;
  //   first = second;
  //   second = first + second;
  // }

  // return res;
}

console.log(getFib(3)); //2
console.log(getFib(1)); //1
console.log(getFib(7)); //13
// console.log(getFib(77)); //1



// console.log(getFac(1)); //1
// console.log(getFac(2)); //2
// console.log(getFac(3)); //6
// console.log(getFac(5)); //120

// console.log(getSum(1)); //1
// console.log(getSum(2)); //3
// console.log(getSum(3)); //6
// console.log(getSum(100)); //5050

function clouser() {
  let sum = 0;

  return function circle() {
    let result = sum;
    if (arguments.length === 0) {
      sum = 0;
      return result;
    }
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return circle;
  };
}

const getSum = clouser();

console.log(getSum(5)(4)(5)(5)());
console.log(getSum(5)(4)());
console.log(getSum(5)());

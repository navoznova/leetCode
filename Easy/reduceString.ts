function reduceStr(str) {
  let res = {};

  for (const letter of str) {
    res[letter] ? (res[letter] += 1) : res[letter]=1;
  }

  return Object.entries(res).flat().join('');
}

console.log(reduceStr("AASSSSKKHFDDDEEEGGHHH"));

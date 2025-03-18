11111;
10001;
10001;
10001;
11111;

function print(n) {
  let arrAst = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (i == 0 || i == n - 1 || k == 0 || k == n - 1) {
        arrAst +=1;
      } else {
        arrAst += 0;
      }
    }
    console.log(arrAst);
    arrAst = "";
  }
}

print(5);

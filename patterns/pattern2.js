let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  console.log(i);
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
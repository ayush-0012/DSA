let n = 5

for(let i=1; i<=n; i++){
  let row = ""
  for(let j=n ; j >= i; j--){
    row += "*"
    // console.log("*");
  }

  console.log(row);
}
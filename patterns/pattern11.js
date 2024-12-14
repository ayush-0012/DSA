let n = 5;

for(let i=1; i<=n; i++){
  let start = 1; 
  let row = ""

  if(i%2 == 0){
    start = 0
  }else{
    start = 1
  }

  for(let j=1; j<=i; j++){
    row += start
    start = 1 - start
  }

  console.log(row);
}
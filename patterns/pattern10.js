let n = 5; 

for(let i=1; i<=n; i++){
  let row = ""
  for(let j=1; j<=i; j++ ){
    row += "*"
  }

  console.log(row);
}

for(let i=0; i<n-1; i++){
  let row = ""
  for(let j=1; j<=n-i-1 ; j++){
    row += "*"
  }
  console.log(row);
}
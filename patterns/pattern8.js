let n = 5;

for(let i = 1; i <= 5; i++){
  let row = ""


  for(let j=1; j<=i+1; j++){
    row += " "
  }
  
  for(let j=1 ; j<=2*n - (2*i+1); j++){
    row += "*"
  }
  for(let j=1; j<=i+1; j++){
    row += " "
  }

  console.log(row);
}
let n = 5 

for(let i=0; i<=5; i++){
  let row = ""


  //upper pyramid
  for(let j=1; j<=n-i; j++){
    row += " "
  }
  
  for(let j=1; j<=2*i-1; j++){
    row += "*"
  }

  for(let j=1; j<=n-i; j++){
    row += " "
  }

  console.log(row);

 
}

for(let i=0; i<=n; i++){
  let row = ""
  for(let j=1; j<=i; j++){
    row += " "
  }

  for(let j=1; j<=n*2 - (2*i+1); j++){
    row += "*"
  }

  for(let j=1; j<=i; j++){
    row += " "
  }

  console.log(row);
}
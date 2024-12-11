let n = 5

for(let i=1; i<=n; i++){
  let row = ""

  //it will print leading space
  for(let j=1; j<=n-i; j++){
    row += " "

  }

  //it will print stars
  for(let j=1; j<=2*i-1; j++){
   
    row += "*"
  }

  //it will print trailing space
  for(let j=1; j<=n-i; j++){
     row += " "
  }
  console.log(row);
}
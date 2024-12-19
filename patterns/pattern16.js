let n = 5; 
let spaces = 0
for(let i=0; i<=n; i++){
  let row = ""
 

  for(let j=1; j<=n-i; j++){
    row += "*"
  }

  for(let j=0; j<spaces; j++){
    row += " "
  }  

  for(let j=1; j<=n-i; j++){
    row += "*"
  }

  spaces += 2

  console.log(row);
}

spaces = 2*n - 2
for(let i=1; i<=n; i++){
  let row = ""

  for(let j=1; j<=i; j++){
    row += "*"
  }

  for(let j=0; j<spaces; j++){
    row += " "
  }

  for(let j=1; j<=i; j++){
    row += "*"
  }

  spaces -= 2

  console.log(row);

}
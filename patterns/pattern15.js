let n = 5; 


for(let i=0; i<n; i++){
  let row = ""

  for(let j=65; j<=65+(n-i-1); j++){
    row += String.fromCharCode(j)
  }
console.log(row);
}
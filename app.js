console.log("A5.3_HW_2");
console.log("---- ---- ----");
console.log("1.1");
console.log("---- ---- ----");

function printNumbers(n,m){
  let numbers=""
  for(let i=1;i<=n;i++){
    numbers = numbers+i
    if(i%m===0){
      numbers = numbers+"%"
    }
  }console.log(numbers)
}
printNumbers(20,5)

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

function printNumbersInTwoLines(n,m){
  let numberDivisible=""
  let numberNotDivisible=""

for(let i=10;i<=n;i++){
  if(i%m===0){
    numberDivisible=numberDivisible+" "+i
  }else{
    numberNotDivisible=numberNotDivisible+" "+i
  }
}console.log("Divible By 5:",numberDivisible)
  console.log("Not Divible By 5:",numberNotDivisible)
}

printNumbersInTwoLines(30,5)

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

function printEvenNumbersBetween(p,n,m){
  if(p>n && n<m){
    for(let i=p;i<=m;i++){
      if(i%2===0){
        console.log(i)
      }
    }
  }
}
printEvenNumbersBetween(8,5,15)

console.log("A5.3_CW");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("1.1");
console.log("---- ---- ----");

function printNumbersPattern(n,m){
let output=""
for(let i=1;i<=n;i++){
  output=output+i
  if(i%m===0 && i!==n){
    output=output+"#"
  }
}
 console.log(output) 
}
printNumbersPattern(9,3)


console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

function printDivisibleAndNotDivisible(n,m){

let numberDivisible=""
let numberNotDivisible=""

for(let i=1;i<=n;i++){
  if(i % m ===0){
    numberDivisible=numberDivisible+" "+i;
  }else{
    numberNotDivisible=numberNotDivisible+" "+i
  }
}
  console.log("Divisible BY 3:", numberDivisible)
  console.log("Not Divisible BY 3:", numberNotDivisible)
}

printDivisibleAndNotDivisible(9,3)

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

function printDivisibleNUmbersBetween(p,n,m){
  if(p<n<m){
    for(let i=n;i<=m;i++){
      if(i%p===0){
        console.log(i)
      }
    }
  }
}

printDivisibleNUmbersBetween(2,3,9)
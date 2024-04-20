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


console.log("A5.4_CW")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

function SumUpToN(n){
  let sum=0
  for(let i=1;i<=n;i++){
    sum=sum+i
  }
  return sum
}
console.log(SumUpToN(5))


console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")


function sumOfOddNUmbersUpToN(n){
  let sum=0
  for(let i=1;i<=n;i++){
    if(i%2 !== 0){
      sum=sum+i
    }
  }return sum
}
console.log(sumOfOddNUmbersUpToN(7))


console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")


function sumDivisibleByThreeAndSevenUpToN(n){
  let sumOfNumbersDivisibleBy3=0
  let sumOfNumbersDivisibleBy7=0

for(let i=1;i<=n;i++){
  
  if(i%3===0){
sumOfNumbersDivisibleBy3 = sumOfNumbersDivisibleBy3 + i
  }
  if(i%7===0){
    sumOfNumbersDivisibleBy7 = sumOfNumbersDivisibleBy7 + i
  }
}
  console.log("sum Of Numbers Divisible By 3:",sumOfNumbersDivisibleBy3)
  console.log("sum Of Numbers Divisible By 7:",sumOfNumbersDivisibleBy7)
}
sumDivisibleByThreeAndSevenUpToN(21)


console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")


function factorial(n){
  let result=1;
  for(let i=1;i<=n;i++){
    result=result*i
  }
  return result
}
console.log(factorial(5))

console.log("A5.4_HW_2");
console.log("---- ---- ----");
console.log("1.1");
console.log("---- ---- ----");

function averageOfNumbersuptoN(n){
  let sum=0
  for(let i=1;i<=n;i++){
    sum= sum+i;
  }
  return sum / n
}

console.log("The average of numbers from 1 to 10:",averageOfNumbersuptoN(10) );

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

function sumOfNumbersGreaterThanSixUpToN(n){
  let result=0
  for(let i=1;i<=n;i++){
    if(i>6){
      result=result+i;
    }
  } return result
} 
console.log("The sum of numbers is:",sumOfNumbersGreaterThanSixUpToN(12));

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

function sumDivisibleByEightUpToN(n){
  let result=0
  for(let i=10;i<=n;i++){
    if(i % 8 === 0){
      result=result+i
    }
  } return result
} 

console.log(sumDivisibleByEightUpToN(40))

console.log("---- ---- ----");
console.log("1.4");
console.log("---- ---- ----");

function sumEvenAndOddUpToN (n){
  let sumOfAllEvenNumbers=0 
  let sumOfAllOddNumbers=0 

for(let i=1;i<=n;i++){
  if(i % 2 ===0){
    sumOfAllEvenNumbers = sumOfAllEvenNumbers +i 
  }
  if(i % 2 !==0){
    sumOfAllOddNumbers = sumOfAllOddNumbers + i
  }
}
  console.log("Sum Of All Even Numbers:",sumOfAllEvenNumbers)
  console.log("Sum Of All Odd Numbers:",sumOfAllOddNumbers)
}

sumEvenAndOddUpToN (30)
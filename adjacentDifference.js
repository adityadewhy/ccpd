const fs = require("fs");

const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");

let intData = Number(inputData)
let currentDigit = 0;
let previousDigit = 0;

let backwardAns = [];

while(intData >= 10) {
    currentDigit = intData % 10
    intData = Math.floor(intData/10)
    previousDigit = intData %10
    
    let difference  = Math.abs(currentDigit-previousDigit)
    
    console.log(difference)
    
    backwardAns.push(difference)
}

console.log(backwardAns)
console.log(backwardAns.reverse())



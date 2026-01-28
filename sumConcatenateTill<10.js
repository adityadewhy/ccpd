const fs = require("fs");

const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");

let n = Number(inputData[0]);
let k = Number(inputData[1])

let intData = n*k;


while (intData >= 10) {
    intData = countSum(n)
}

function countSum(n) {

    let sum = 0
    while (intData > 0) {
        let current = intData % 10;
        sum += current;
        intData = Math.floor(intData / 10);
    }
    return sum
}




console.log(intData)

const fs = require("fs");

const inputData = fs.readFileSync(0, "utf-8").trim();

let intData = Number(inputData);
let sum = 0;

while (intData > 0) {
    let current = intData % 10;
    sum += current;
    intData = Math.floor(intData / 10);
}

console.log(sum);

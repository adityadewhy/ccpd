import * as fs from "fs"

function main () {
    
    const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");
    
    let n = Number(inputData[0]);
    const k = Number(inputData[1]);
    
    let sum = 0;
    
    while(n>0){
        let remainder = n%10;
        sum+= remainder;
        n = Math.floor(n/10);
    }
    
    console.log(sum)

    
    let repeatedSum = sum * k;
    console.log(repeatedSum)
    
    if(repeatedSum <10){
        console.log(repeatedSum);
        return repeatedSum;
    }
    
    while(repeatedSum >= 10) {
        console.log(repeatedSum)
        repeatedSum = sumTillSingle(repeatedSum)
    }
    
    console.log(repeatedSum);
    return repeatedSum;
    
    
}

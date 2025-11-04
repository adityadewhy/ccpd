
import * as fs from "fs"

main()

function main() {
    
    const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");
    let n1 = Number(inputData[0]);
    let n2 = Number(inputData[1]);
    
    let ans = [];

    for(let i=n1; i<=n2; i++) {
        let numOfDigits = numDigs(i)
        let result = poweredSum(i,numOfDigits);
        if(result == i){
            ans.push(result);
        }
    }
    
    console.log(ans)
}

    

function numDigs(n){
    let counter = 0;
    while(n>0){
        n = Math.floor(n/10);
        counter+=1;
    }
    return counter;
}

function poweredSum(eachNum, numOfDigits) {
    let eachNumSum = 0;
    while(eachNum>0){
        let remainder = eachNum%10;
        let poweredDigit = Math.pow(remainder, numOfDigits)
        eachNumSum += poweredDigit;
        eachNum = Math.floor(eachNum/10);
    }
    return eachNumSum;
}

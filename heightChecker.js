// your code goes here

const fs = require("fs")

function main() {

   
    const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");
    let arraySize = parseInt(inputData[0])
    let nums = inputData[1].split(" ")

    for (let i = 0; i < arraySize; i++) {
        nums[i] = parseInt(nums[i]);
    }
    
    let numsCopy = []
    for(let i = 0; i< arraySize; i++) {
        numsCopy[i] = nums[i]
    }
    numsCopy.sort((a,b)=>a-b)
    
    let counter = 0;
    for(let i=0; i<arraySize; i++) {
        if(numsCopy[i] != nums[i]) {
            counter ++
        }
    }
    console.log(numsCopy, nums)
    console.log(counter)


}

main()

// your code goes here

const fs = require("fs")

function main() {

    const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");
    let arraySize = parseInt(inputData[0])
    let nums1 = inputData[1].split(" ")

    for (let i = 0; i < arraySize; i++) {
        nums1[i] = parseInt(nums1[i]);
    }

   // console.log(nums1)

    let ans = []
    let counter = 1;

    for (let i = 0; i < arraySize; i++) {
        let currentElement = nums1[i];
        
        let iterator = 0;
        while(iterator <= arraySize-1){
            if(currentElement < nums1[iterator]) {
                counter++
            }
            iterator++
        }
        ans.push(counter);
        counter = 1;
    }

    console.log(ans)


}

main()

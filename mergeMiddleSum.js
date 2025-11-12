const fs = require("fs")

function main() {

    const inputData = fs.readFileSync(0, "utf-8").trim().split("\n");
    let arraySize = Number(inputData[0]);
    let nums1 = inputData[1].split(" ");
    let nums2 = inputData[2].split(" ");

    for (let i = 0; i < arraySize; i++) {
        parseInt(nums1[i]);
        parseInt(nums2[i])
    }
    console.log("nums1 : ", nums1, "nums2 ", nums2)

    // console.log(arraySize, nums1, nums2)

    let nums3 = []
    for (let i = 0; i < arraySize; i++) {
        nums3.push(nums1[i]);
        nums3.push(nums2[i])

    }

    nums3.sort((a, b) => a - b)

    console.log(nums3)

    let sum = nums3[nums3.length / 2 - 1] + nums3[nums3.length / 2 + 1]
    console.log(sum)
} 

main()

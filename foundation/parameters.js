//Normal
function logNums(nums) {
    for (let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3])

//Operator Spread/Rest
//01
function logNums(...nums) {
    for (let n of nums) {
        console.log(n)
    }
}

logNums(1, 2, 3)

//02
function logNums(...nums) {
    console.log(nums)
}

logNums(1, 2, 3)

//------

function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 10))
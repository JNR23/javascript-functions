//Arrow Function is always anonymous

const increment = (n) => {
    return n + 1
}

console.log(increment(5))

//----------------------

const increment2 = n => {
    return n + 1
}

console.log(increment(5))

//----------------------

const increment3 = n => n + 1

console.log(increment3(5))

//----------------------

const increment4 = (n1, n2) => n1 + n2

console.log(increment4(5, 5))
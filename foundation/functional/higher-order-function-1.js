/*
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions.
 */

//Form 1-------------------------

function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

//Form 2-------------------------

function run2(fn) {
    return fn()
}

run2(function() {
    console.log('run!!')
})

//Form 3-------------------------

function run3(fn) {
    return `Result: ${fn()}`
}

const result = run3(Math.random)
console.log(result)

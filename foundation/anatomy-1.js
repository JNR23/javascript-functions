//Function declaration

function sayHello() {
    console.log('Hello!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}

sayHelloTo('Nike')

function returnHi() {
    return 'Hi!'
}

console.log(returnHi())

let greeting = returnHi()
console.log(greeting)

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Adidas'))
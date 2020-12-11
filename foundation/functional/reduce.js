//Exemple Reduce

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, number) => total + number

console.log(numbers.reduce(sum))
console.log(numbers.reduce(sum, 100))

const avg = (acumulator, number, indice, array) => {
    if (indice === array.length - 1) {
        return (acumulator + number) / array.length
    } else {
        return acumulator + number
    }
}

console.log(numbers.reduce(avg))
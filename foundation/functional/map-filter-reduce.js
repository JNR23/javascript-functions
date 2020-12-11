const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = number => number.score

const greatStudent = student => student.score >= 9

const avg = (acumulator, number, indice, array) => {
    if (indice === array.length - 1) {
        return (acumulator + number) / array.length
    } else {
        return acumulator + number
    }
}

console.log(students.filter(greatStudent).map(getScore).reduce(avg))
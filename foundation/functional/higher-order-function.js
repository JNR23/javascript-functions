/* Function return other Functional / (Curring) Function parameter parcial */

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

console.log(finalPrice(0.0875)(25.1))

const usFinalPrice = finalPrice(0.0875)
console.log(usFinalPrice(25.1))
function entre(numero, min, max, inclusivo) {
    if (inclusivo == true) {
        if (numero >= min && numero <= max) {
            return true
        } else {
            return false
        }
    } else if (inclusivo == false || inclusivo == undefined) {
        if (numero > min && numero < max) {
            return true
        } else {
            return false
        }
    }
}

console.log(entre(10, 1, 10, false))
function tipoTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('Equilatero')
    } else if(a == b || a == c  || b == c) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

tipoTriangulo(2, 2, 2)
tipoTriangulo(2, 9, 4)
tipoTriangulo(2, 9, 9)


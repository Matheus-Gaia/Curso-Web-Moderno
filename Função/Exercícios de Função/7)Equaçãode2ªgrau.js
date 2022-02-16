function bhaskara(a, b, c) {
    let resultado = []
    let delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        console.log('Delta é negativo!')
    } if (delta >= 0) {
        let x1 = (-b + Math.sqrt(delta)) / 2 * a
        let x2 = (-b - Math.sqrt(delta)) / 2 * a
        resultado.push(x1.toFixed(2), x2.toFixed(2))
        return console.log(resultado)
    }
}

bhaskara(2, 5, 2)
bhaskara(1, 3, 2)
bhaskara(3, 1, 2)
bhaskara(0, -0, 0)
bhaskara(2, -6, 2)
bhaskara(5, -8, 2)
bhaskara(0, -2, 3)
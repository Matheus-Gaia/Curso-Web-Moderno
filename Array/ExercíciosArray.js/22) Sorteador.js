function sorteador(num) {
    let min = 5
    let max = 10
    let sorteio = Math.floor(Math.random() * (max - min + 1) + min)
    if(num === sorteio) {
        return `Parabéns! O número sorteado foi o ${sorteio}`
    } else {
        return `Que pena! O número sorteado foi o ${sorteio}`
    }

}



console.log(sorteador(1))
console.log(sorteador(2))
console.log(sorteador(3))
console.log(sorteador(4))
console.log(sorteador(5))
console.log(sorteador(6))
console.log(sorteador(7))
console.log(sorteador(8))
console.log(sorteador(9))
console.log(sorteador(10))
console.log(sorteador(5))
console.log(sorteador(6))
console.log(sorteador(7))
console.log(sorteador(8))
console.log(sorteador(9))
console.log(sorteador(10))

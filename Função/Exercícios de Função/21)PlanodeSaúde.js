function plano(idade) {
    const plano1 = 180
    const plano2 = 150
    const plano3 = 195
    const plano4 = 230
    
    if(idade < 10) {
       return console.log(`O valor do plano 1 é: ${plano1}`)
    } if(idade >= 10 && idade <= 30) {
       return console.log(`O valor do plano 2 é: ${plano2}`)
    } if(idade > 30 && idade <= 60) {
        return console.log(`O valor do plano 3 é: ${plano3}`)
    } if(idade > 60) {
        return console.log(`O valor do plano 4 é: ${plano4}`)
    } 
}

plano(9)
plano(25)
plano(40)
plano(22)
plano(65)
plano(50)

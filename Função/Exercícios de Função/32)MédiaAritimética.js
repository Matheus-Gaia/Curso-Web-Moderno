function media(valores) {
    let med = 0
    for(i = 0; i < valores.length; i++) {
        med += valores[i] 
        
    }
    return console.log(`A média aritimética é ${(med/i).toFixed(2)}.`)
}

media([20, 25, 10, 5])
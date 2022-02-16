function bissexto(ano) {
    if(ano <= 0) {
        return console.log(false)  
    } if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

bissexto(0)
bissexto(4)
bissexto(00)
bissexto(400)
bissexto(800)
bissexto(2020)
bissexto(2021)
bissexto(2600)




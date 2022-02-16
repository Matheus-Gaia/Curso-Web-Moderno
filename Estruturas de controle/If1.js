function soBoanoticia(nota) {
    if(nota >= 7) { 
        console.log("Aprovado com ", + nota)
    }
}

soBoanoticia(8.1)
soBoanoticia(6.1)

function seForverdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...', valor)
    }
}

seForverdadeEuFalo()
seForverdadeEuFalo(null)
seForverdadeEuFalo(undefined)
seForverdadeEuFalo(NaN)
seForverdadeEuFalo('')
seForverdadeEuFalo(0)
seForverdadeEuFalo(' ')
seForverdadeEuFalo(-1)
seForverdadeEuFalo('?')
seForverdadeEuFalo([])
seForverdadeEuFalo([1, 2])
seForverdadeEuFalo({})
seForverdadeEuFalo(!false)
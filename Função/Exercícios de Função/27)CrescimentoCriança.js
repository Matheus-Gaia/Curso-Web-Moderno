function comparador(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2) {
        if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
           return 'Serão sempre iguais.'
        }
    }else if(altura1 < altura2) {
        if(taxa2 >= taxa1) {
            return 'A criança 1 não ultrapassará a criança 2.'
        } else {
            return `A criança 1 ultrapassará a criança 2 em ${contador(altura1, taxa1, altura2, taxa2)} anos.`
        }
    }else {
        if(taxa1 >= taxa2) {
            return 'A criança 2 não ultrapassará a criança 1.'
        } else {
            return `A criança 2 ultrapassará a criança 1 em ${contador(altura2, taxa2, altura1, taxa1)} anos.`
        }
    }
}

function contador(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
    let anos = 0
    while(alturaMenor < alturaMaior){
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        anos++
    }
    return anos
}

console.log(comparador(120, 2, 120, 2))
console.log(comparador(120, 1, 120, 2))
console.log(comparador(120, 1, 120, 0))
console.log(comparador(121, 1, 120, 0))
console.log(comparador(121, 1, 122, 2))
console.log(comparador(123, 0, 122, 2))
console.log(comparador(123, 3, 128, 2))
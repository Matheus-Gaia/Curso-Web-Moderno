{
    {
        {
            {
                var sera = 'SERÁ???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)//VARIÁVEL "VAR" FICARÁ VISÍVEL DENTRO E FORA DO BLOCO AO QUAL ELA PERTENCE (GLOBAL)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) não funcionará, pois "local" está preso na função (LOCAL)
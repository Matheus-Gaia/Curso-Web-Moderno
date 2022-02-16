function juros(cInicial, taxa, tMes) {
    const montante1 = ((cInicial * taxa * tMes) / 100) + cInicial
    const montante2 = (cInicial * (1 + (taxa/100)) ** tMes) 
    return console.log('Montante em juros simples:', montante1),
           console.log('Montante em juros compostos:', montante2.toFixed(2)),
           console.log('')
}

juros(100, 5, 2)
juros(120, 3, 5)
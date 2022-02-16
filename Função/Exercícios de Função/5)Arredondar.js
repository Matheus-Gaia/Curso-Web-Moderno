arredondar = a => console.log(`R$ ${(a).toFixed(2).toString().replace('.', ',')}`)
arredondar(0.30000000000000004)
arredondar(1.40000000000000000000006)
arredondar(0.1 + 0.2)
function opcao(carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
        case 'caminhonete':
        case 'motocicleta':
            console.log('Tem certerza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui!')
    }
}

opcao('hatch')
opcao('sedan')
opcao('motocicleta')
opcao('caminhonete')
opcao('ônibus')
opcao('kombi')
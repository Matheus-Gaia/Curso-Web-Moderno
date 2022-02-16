function erroMaiusc(erro) {
    //throw 10
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function nomeMaiusc(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        erroMaiusc(e)
    } finally {
        console.log('Errouuu!!!')
    }
}

const obj = { nome: 'Matheus' }
nomeMaiusc(obj)
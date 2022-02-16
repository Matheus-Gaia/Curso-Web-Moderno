function Carro(vMax = 200, delta = 5) {
    //Atributo privado
    let vAtual = 0

    //método público
    this.acelerar = function(){
        if(vAtual + delta <= vMax) {
            vAtual += delta
        } else {
            vAtual = vMax
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return vAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(400, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())



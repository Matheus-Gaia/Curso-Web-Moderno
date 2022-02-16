// Cadeia de protótipos
Object.prototype.attr0 = '0' // Não faça isso!!!!

const avo = {Attr1: 'A'}
const pai = {__proto__: avo, Attr2: 'B'}
const filho = {__proto__: pai, Attr3: 'C'}
console.log(filho.attr0, filho.Attr1, filho.Attr2, filho.Attr3)

const carro = {
    vAtual: 0,
    vMax: 200,
    acelerarMais(delta)  {
        if (this.vAtual + delta <= this.vMax) {
            this.vAtual += delta
        } else {
            this.vAtual = this.vMax
        }
    },
    status() {
        return `${this.vAtual}Km/h de ${this.vMax}Km/h`
    }
}

const ferrari = {
    __proto__: carro,
    modelo: 'F40',
    vMax: 324 //shadowing = sobrescreve a 'original'
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//super = sobrescreve e retorna o método do protótipo.
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
volvo.acelerarMais(150)
console.log(ferrari.status())
console.log(volvo.status())


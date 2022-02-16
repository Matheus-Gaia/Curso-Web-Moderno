const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //antigo
const obj2 = {a, b, c} //novo
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 8.6

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //antigo
    },

    funcao2() {
        //Novo
    }
}

console.log(obj5)
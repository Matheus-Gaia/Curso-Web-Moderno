const ferrari = {
    modelo: 'f40',
    vMax: 324
}

const volvo = {
    modelo: 'v40',
    vMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(typeof Object.prototype, typeof meuObjeto.prototype)
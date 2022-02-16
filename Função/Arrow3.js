let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaThisArrow = param => console.log(this === param)
comparaThisArrow(global)
comparaThisArrow(module.exports)

comparaThisArrow = comparaThisArrow.bind(obj)
comparaThisArrow(obj)
comparaThisArrow(module.exportsh)
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logthis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    
    console.log(this === global)
    
}

logthis()

// Dentro de uma função o this aponta para global.
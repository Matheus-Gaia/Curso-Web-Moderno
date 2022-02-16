// callbacks
/* 
/* setTimeout(() => {
    console.log('Executando callback...')
    
    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(() => {
            console.log('Executando callback...') */
//        }, 2000)
//   }, 2000)
//}, 2000) */



//Promises 

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Excutando promise...')
            resolve('Vishhh')
        }, 2000)  
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
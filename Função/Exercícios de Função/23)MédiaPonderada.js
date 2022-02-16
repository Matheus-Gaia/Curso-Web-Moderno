function mediaponderada(aluno, nota1, nota2, nota3) {
    let maior
    let menor1
    let menor2
    if(nota1 > nota2 && nota1 > nota3) {
        maior = nota1
        menor1 = nota2
        menor2 = nota3
    } if(nota2 > nota1 && nota2 > nota3) {
        maior = nota2
        menor1 = nota1
        menor2 = nota3
    } if(nota3 > nota2 && nota3 > nota1) {
        maior = nota3
        menor1 = nota1
        menor2 = nota2
    }
   let condicao 
   let resultado = ((maior*4) + (menor1*3) + (menor2*3))/10
    if(resultado >= 5) {
        condicao = 'APROVADO!!!'
    } else {
        condicao = 'REPROVADO!!!'
    }
   return console.log(`Código do aluno: ${aluno}`),
          console.log(`Nota 1: ${nota1}`),
          console.log(`Nota 2: ${nota2}`),
          console.log(`Nota 3: ${nota3}`),
          console.log(`Média: ${resultado}`),
          console.log(`Condição ${condicao}`)
}

function alunoAleatorio(min, max) {
    const aluno = Math.random() * (max - min) + min
    return Math.floor(aluno)
}

function nota1Aleatorio(min, max) {
    const nota1 = Math.random() * (max - min) + min
    return Math.floor(nota1)
}
function nota2Aleatorio(min, max) {
    const nota2 = Math.random() * (max - min) + min
    return Math.floor(nota2)
}
function nota3Aleatorio(min, max) {
    const nota3 = Math.random() * (max - min) + min
    return Math.floor(nota3)
}

let aluno = 0
while (aluno != -1) {
    aluno = alunoAleatorio(-1, 10)
    nota1 = nota1Aleatorio(0, 10)
    nota2 = nota2Aleatorio(0, 10)
    nota3 = nota3Aleatorio(0, 10)
    mediaponderada(aluno, nota1, nota2, nota3)
}

console.log('FIM!!!')

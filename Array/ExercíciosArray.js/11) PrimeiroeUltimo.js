function priU(array) {
    const tamanho = array.length
    const pri = array[0]
    const ut = array[tamanho - 1]
    const resultado = []
    resultado.push(pri, ut)
    return console.log(resultado)
}
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa', 'Hamilton']
const cur = [7, 14, "olá"]
const cur2 = [-100, "aplicativo", 16]

priU(pilotos)
priU(cur)
priU(cur2)


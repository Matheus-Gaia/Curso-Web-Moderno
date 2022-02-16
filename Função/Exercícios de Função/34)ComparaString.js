function comparador(string1, string2) {
    let tem = true
    for (let i in string1) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j in string2) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                tem = true
                break
            } else {
                tem = false
            }
        }
        if (!tem) {
            return tem
        }
    }
    return tem
}

console.log(comparador('abce', 'cbda'))
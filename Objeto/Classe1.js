class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    } 

    addlancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
            
        })
        return valorConsolidado
    }
}

const salário = new Lancamento('Salário', 4500)
const contaLuz = new Lancamento('Luz', -500)
const contaAgua = new Lancamento('Água', -500)

const contas = new CicloFinanceiro(6, 2020)
contas.addlancamentos(salário, contaLuz, contaAgua)
console.log(contas.sumario())
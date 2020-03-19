class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos  = []
    }

    addLançamentos(...lancamentos){
        lancamentos.forEach(elemento => this.lancamentos.push(elemento))
        //console.log(this.lancamentos)
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(elemento =>{
            valorConsolidado += elemento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)


const contas = new CicloFinanceiro(6, 2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())
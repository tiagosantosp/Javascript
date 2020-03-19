//Temos no JS os métodos Get e Set
//Entretanto o JS não possui método privado

const sequencia = {
    //por convenção no JS utilizamos o "_"(underline) para sinalizar métodos privados
    _valor: 1,
    // o método get serve para pegar o valor do atributo
    get valor(){
        return this._valor++
    },
    //o método set serve para alterar o valor do atributo
    set valor(valor){
        if (valor > this._valor){
            return this._valor = valor
        }
    }
}

//ao acessar o atributo ele não acessa diretamente
console.log(sequencia.valor, sequencia.valor)

//ao alterar o atributo ele não acessa diretamente
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)
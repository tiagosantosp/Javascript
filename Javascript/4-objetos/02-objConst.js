//quando declaramos um objeto como constante ainda assim
//podemos alterar suas propriedades
const pessoa = {
    nome: 'tiago'
}
console.log(pessoa.nome)//tiago
pessoa.nome = 'Maria'
console.log(pessoa.nome)//Maria

//para manter algum atributo devemos utilizar o método Freeze
Object.freeze(pessoa)
pessoa.nome = "tiago"
//continua sendo maria
console.log(pessoa.nome)//Maria
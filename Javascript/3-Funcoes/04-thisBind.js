//o this é uma elemento de referencia ele substitui o nome de quem 
//chama alguma função ou método

const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        //nesse caso o this referencia ao obj pessoa
        console.log(this.saudacao)
    }
}

//ao executar o metodo falar seria como usar
//console.log(pessoa.saudacao)
pessoa.falar() // Bom dia!

//caso eu quera atribuir esse método a uma variavel
//ele perde a referencia ao obj
const falar = pessoa.falar 
falar() // undefined

//para amarrar a referencia posso utilizar a função Bind
//e colocar a quem esta amarrando o this
const falar2 = pessoa.falar.bind(pessoa)
falar2() // Bom dia!

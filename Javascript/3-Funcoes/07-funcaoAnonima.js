// uma função anonima é uma função onde voce oculta o nome

//normalmente armazenamos elas em variaveis 
let soma = function (a, b){
    return a + b
}
console.log(soma(4, 3))//7

//ou passamos elas como parametros para outras funções
let dobrar = (a) => console.log(a * 2)

dobrar(9)//18


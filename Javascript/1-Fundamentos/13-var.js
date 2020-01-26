/* a variavel declarada com var ela vai para o escopo global
sendo assim voce pode acabar alterando o valor dela 
até mesmo sem saber*/

var teste = "olá"

{
    var teste = "oi"
    console.log(teste)//oi
}
console.log(teste)//oi

//apenas dentro de uma função o escopo é diferente 
function saudacao(){
    var teste = "Hello"
    console.log(teste)//Hello
}
saudacao()
console.log(teste)//oi

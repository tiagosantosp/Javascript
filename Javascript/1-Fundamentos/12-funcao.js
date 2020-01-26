/*Funcao é uma rotina de código que pode receber
ou não parametros e pode ou não retornar algum valor*/

//para declarar uma função utilizamos a palavra "function"
//depois voce coloca o nome da função 
// abre () e voce pode colocar parametros dentro deles
function somar(a, b){
    console.log(a + b)
}

//para chamar a função colocamos o nome e os ()
//caso haja parametros colocamos dentro dos ()
somar(5, 7)//12

/*ao utilizar o retorno na função o valor sai de dentro
do escopo da função e passa a fazer parte do escopo global*/
function ola(nome){
    saudacao = `Olá ${nome} seja bem vindo`
    return saudacao
}

console.log(ola("tiago"))//Olá tiago seja bem vindo

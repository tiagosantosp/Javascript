console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//tudo se baseia em funções sendo assim podemos adicionar novas funções a partir da herança

String.prototype.falar = function (){
    return this.replace("i", 1).replace("o", 0)
}

const palavra = "Tiago"

console.log(palavra)//Tiago
//adicionei uma nova funcionalidade para as strings
console.log(palavra.falar())//T1ag0


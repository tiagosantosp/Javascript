//temos o rest que serve para juntar parametros
// e temos o spread para espalhar conteudo do obj ou array

//spread com obj
const funcionario = {nome: 'maria', salario: 1000}
const clone = {idade: 20, ...funcionario}
console.log(clone)//{ idade: 20, nome: 'maria', salario: 1000 }
//ele cria um novo endereço de memoria para os atributos 


//spread com array
const grupoA = ['tiago', 'dani']
const gruponovo = ['maria', ...grupoA]
console.log(gruponovo)//[ 'maria', 'tiago', 'dani' ]
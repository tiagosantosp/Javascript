//Array é uma variável composta por outros valores

// podemos criar um array utilizando "[]"
let listaNomes = ['tiago', 'maria', 'dani']

//o array pode guardar diversos valores dentro dele e
// é acessado por um numero indice que se inicia no 0(zero)
console.log(listaNomes)//[ 'tiago', 'maria', 'dani' ]


//para acessar algum item do array colocamos o numero do indice entre []
console.log(listaNomes[0])//tiago

//para adicionar um elemento no final do array utilizamos o método push
listaNomes.push('joao')
console.log(listaNomes)//[ 'tiago', 'maria', 'dani', 'joao' ]

//para adicionar o alterar devemos informar o indice e atribuir o valor
listaNomes[2] = 'joana'
console.log(listaNomes)//[ 'tiago', 'maria', 'joana', 'joao' ]

//para excluir o ultimo elemento do array utilizamos o método pop
listaNomes.pop()
console.log(listaNomes)//[ 'tiago', 'maria', 'joana' ]

//para colocar o array em ordem utilizamos o método sort
listaNomes.sort()
console.log(listaNomes)//[ 'joana', 'maria', 'tiago' ]

//para excluir uma posição especifica utilize a propriedade delete
delete listaNomes[0]
console.log(listaNomes[0])//undefined

//o método splice serve tanto para excluir como para adicionar novos elementos no array
listaNomes.splice(0, 1, 'julia')//[ 'julia', 'maria', 'tiago' ]
console.log(listaNomes)
//no splice o primeiro parametro é a partir de qual indice quer modificar
//no segundo é quantos indices quer modificar 
//no terceiro qual a modificação. Se voce não passar ele apenas exclui

//para remover o primeiro elemento do array temos o método shift
listaNomes.shift()
console.log(listaNomes)//[ 'maria', 'tiago' ]

//para adicionar no primeiro elemento do array utilizamos o unshift
listaNomes.unshift("santos")
console.log(listaNomes)//[ 'santos', 'maria', 'tiago' ]

//slice retorna um novo array com os elementos de um array
const novoArray = listaNomes.slice(0,2)
//temos que passar onde começa e onde termina
console.log(novoArray)//[ 'santos', 'maria' ]
console.log(listaNomes)//[ 'santos', 'maria', 'tiago' ]
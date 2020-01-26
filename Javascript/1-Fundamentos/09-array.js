// array é uma variável composta onde podemos guardar varios valores

/*para declarar uma array utilizamos [](colchetes)
cada valor dentro do array tem de ser separado por ","virgula*/
const valores = ['tiago', 1, false, 1.7]

/*para acessar algum dado dentro do array colocamos o número
indice dele sendo que começa no indice 0(zero)*/
console.log(valores[2])//false

//caso tentar acessar um indice que não existe ele retorna undefined
console.log(valores[100])//undefined

//podemos adicionar algum valor no array
valores[4] = "novo"
console.log(valores)//[ 'tiago', 1, false, 1.7, 'novo' ]

//podemos saber quantos elementos o array possui
console.log(valores.length)//5

//temos um método para adicionar um valor no array
valores.push(1000)
console.log(valores)//[ 'tiago', 1, false, 1.7, 'novo', 1000 ]

//podemos remover o ultimo elemento do array
valores.pop()
console.log(valores)//[ 'tiago', 1, false, 1.7, 'novo' ]

//podemos eliminar um elemento do array em qualquer posição
delete valores[2]
console.log(valores[2])//undefined



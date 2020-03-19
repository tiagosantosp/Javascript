//filter como o próprio nome diz server para filtrar um array

const pessoas = [
    {nome: 'tiago', idade: 25},
    {nome: 'Dani', idade: 26},
    {nome: 'Maria', idade: 1},
    {nome: 'Pedro', idade: 14}
]

//no filter fazemos um teste lógico e tudo que for true ele retorna
const deMaior = pessoa => pessoa.idade > 18

const resultado = pessoas.filter(deMaior)
console.log(resultado)

//ORDENAR OBJ VIA SORT
console.log(pessoas.sort((a, b) => a.idade - b.idade)) 
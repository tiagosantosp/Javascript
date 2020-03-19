const alunos = [
    {nome : 'Joao', nota: 7.3, bolsista: false},
    {nome : 'Maria', nota: 9.2, bolsista: true},
    {nome : 'Pedro', nota: 9.8, bolsista: false},
    {nome : 'Ana', nota: 8.7, bolsista: true},
]

//o reduce pega o primeiro e segundo elemento do array
//depois ele retorna os dois primeiros e recebe o terceiro 
//assim por diante

const notas = nota => nota.nota

const somar = (acumulador, proximo) => acumulador + proximo

const resultado = alunos.map(notas).reduce(somar)
console.log(resultado)//35

//podemos adicionar um valor inicial ao reduce
const result = alunos.map(notas).reduce(somar, 5)
console.log(result)//40

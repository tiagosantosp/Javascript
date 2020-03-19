//Temos algumas funções para manipular obj no JS

const pessoa = {
    nome: "tiago",
    idade: 25,
    peso: 80
}

//mostar apenas as chaves do obj
console.log(Object.keys(pessoa))//[ 'nome', 'idade', 'peso' ]

//mostrar os atributos do obj
console.log(Object.values(pessoa))//[ 'tiago', 25, 80 ]

//mostrar o conteudo do obj como array
console.log(Object.entries(pessoa))//[ [ 'nome', 'tiago' ], [ 'idade', 25 ], [ 'peso', 80 ] ]

//temos uma função para definir e especificar um atributo
//1- Passamos o objeto
//2- nome do atributo
//3- quais as caracteristicas do atributo
Object.defineProperty(pessoa, 'dataNasc',{
    enumerable: true,//identifica se será listado ou não
    writable: false,//permite alterar o valor do atributo
    value: '14/11/1994'//o conteudo do atributo
})
console.log(pessoa)//{ nome: 'tiago', idade: 25, peso: 80, dataNasc: '14/11/1994' }

//temos uma função para pegar os valores de outros obj
//e colocar dentro de um unico obj
const destino = {}
const a = {a: 1}
const b = {b: 2}
//colo o obj depois os que voce quer juntar
const objetoDestino = Object.assign(destino, a, b)
console.log(objetoDestino)//{ a: 1, b: 2 }

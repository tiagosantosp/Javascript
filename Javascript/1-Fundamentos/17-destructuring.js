//Destructuring é para pegar atributos dos objetos
//como o nome ja diz desestruturar o obj

const pessoa = {
    nome: "tiago",
    idade: 25,
    endereco: {
        rua: "passos",
        numero: 112
    }
}

//para pegar o os valores do obj coloque o nomes dos atributos 
//e de qual obj você esta pegando
const {nome, idade} = pessoa
console.log(nome, idade)//tiago 25

//para alterar o nome das variaveis coloque "atributo: nome da variavel"
const {nome: n, idade: i} = pessoa
console.log(n, i)//tiago 25

//podemos colocar um valor padrão caso pegarmos algo que não exista
const { nome: nome2, sobrenome = "santos"} = pessoa
console.log(nome2, sobrenome)//tiago santos

// as palavras let e const são recentes do EcmaScript

//let diferente de var possui um escopo de global let tem escopo de bloco
let nome = "tiago"

//const como o nome indica é uma constante não pode ser alterada
const idade = "25"

//Template String
//uma forma de concatenar variaveis com texto de uma forma mais facil
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
//Meu nome é tiago e tenho 25 anos


//Destructuring
//desestruturar um array, String ou Objeto
const [a, b, ...cde] = "TIAGO"
console.log(a, b, cde)//T I [ 'A', 'G', 'O' ]
const [x, y] = [1, 2]
console.log(x, y)//1 2
const {idade: i, nomes} = { nomes: "tiago", idade: 25}
console.log(i, nomes)// 25 tiago


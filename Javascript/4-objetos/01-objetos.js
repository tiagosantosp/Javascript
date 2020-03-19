// Todo objeto é uma coleção de chave/valor
//para criar temos 2 modos 

//modo convencional
const obj = new Object

//modo literal 
const obj2 = {}

//Temos 3 modos de atribuir valores no obj

//declarando dentro do obj
const obj3 = {
  nome: "tiago"
}
console.log(obj3.nome)//tiago

//declarando com  a notação ponto
obj3.idade = 25
console.log(obj3.idade)//25

//declarando via array
obj3["peso"]= 80
console.log(obj3.peso)//80


//podemos deletar atributos utilizando o método "delete"
delete obj3.idade
console.log(obj3)//{nome:"tiago",peso:80}

//podemos ter obj dentro de outros obj
let pessoa = {
    nome : "tiago",
    idade : 25,
    endereco : {
        rua :"rua fulano de tal",
        numero: 1234
    }
}
//para acessar colocamos o nome do obj.nomeDoAtributo
console.log(pessoa.endereco.rua)//rua fulano de tal


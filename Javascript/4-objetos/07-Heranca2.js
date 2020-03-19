const pai = {
    nome: "tiago",
    corCabelo: "preto"
}

//Outro modo de dizer que filha herda de pai
const filha1 = Object.create(pai)

filha1.nome = "MARIA"
console.log(filha1.corCabelo)// preto

//podemos definir as propriedades antes de criar o obj
const filha2 = Object.create(pai, {
    nome: {
        value: "BIA",//valor do nome
        writable : false, //se podemos sobreescrever o atributo
        enumerable : true // se ele será listado como atributo
    }
})

for (let key in filha2){
    console.log(key)//lista as propriedades
    
}

//Herança como o próprio nome diz é herdar de alguem
//Um Obj pode herdar as caracteristicas e métodos de outro Obj

const avo = {atributo1: "A"}
//para referenciar a herança utilizamos o atributo "__proto__" de prototype
const pai = {__proto__: avo, atributo2: "B"}

const filho = {
    __proto__: pai,
    atributo3: "C",
    status(){
        //super referencia ao obj pai
        //this referencia a este obj
        return `${super.atributo1}, ${this.atributo3}`
    }
}

//Temos tambem o método setPrototypeOf para referenciar um obj pai
Object.setPrototypeOf(filho, pai)

//No caso pai não prossui atributo1 então ele vai herdar do avo
console.log(pai.atributo1)// A

//No caso do filho caso não ache no pai ele procura no pai do pai
console.log(filho.atributo1)// A

//podemos tambem sobreescrever um atributo herdado
filho.atributo1 = "OLÁ"
console.log(filho.atributo1)// OLÁ

//Mesmo com o atributo declarado podemos acessar os atributos e métodos
//do obj pai utilizando a palavra super no obj filho
console.log(filho.status())// A, C

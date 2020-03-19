//podemos declarar atributos de um obj de forma reduzida
const a = 5
const b = 3

//note como declarar o atributo "A" e o "B"
const obj = {a, b: b}
console.log(obj)//{a:5,b:3}

//outra coisa é podermos utilizar o valor de uma váriavel
//para nomear atributos
const nomeAtributo = "nome"
const valorAtributo = "Tiago"

//apenas devemos coloca-los como array
const obj2 = {[nomeAtributo]: valorAtributo}
console.log(obj2)//{nome:"Tiago"}


//podemos criar métodos de forma reduzida
const obj3 = {
    //no modo normal utilizamos uma função anônima
    falar: function(){
        console.log("Olá")
    },

    //no modo reduzido ocultamos a palavra function
    falar2(){
      console.log('Olá2')  
    }
}

obj3.falar()//olá 
obj3.falar2()//olá2

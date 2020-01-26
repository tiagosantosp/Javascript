//Todo número em JS é do tipo NUMBER
let a = 1
let b = 1.5
let c = -1
console.log(typeof a, typeof b, typeof c)

//Podemos utilizar alguns métodos dentro de NUMBER

//Verificar se o número é inteiro
console.log(Number.isInteger(a))//true
console.log(Number.isInteger(b))//false

//colocar numero de casas decimais
a = 3.333333333333
console.log(a)
console.log(a.toFixed(2))

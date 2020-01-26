//boolean é um tipo de dado TRUE(verdadeiro) e FALSE(falso)

//podemos declarar explicitamente o tipo boolean
let logico = false
console.log(logico)//false

logico = true
console.log(logico)//true

//0 representa false e qualquer numero diferente de 0 é verdadeiro 
logico = 1
console.log(!!logico)//true

logico = 0
console.log(!!logico)//false

logico = -1
console.log(!!logico)//true

//infinito é verdadeiro
console.log(!!Infinity)//true

//String vazia é falso
console.log(!!'')//false

//null é false
console.log(!!null)//false

//not a number é false
console.log(!!NaN)//false

//undefined
console.log(!!undefined)//false




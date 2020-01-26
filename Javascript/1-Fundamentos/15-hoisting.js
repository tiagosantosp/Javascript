//o sistema é hoisting nada mais é que o içamento de variaveis

/*ao tentar utilizar uma variavel antes de defini-la 
normalmente outras linguagens quebrariam mas o JS possui o hoisting
que iça  uma variavel que foi declarada após ser chamada*/

console.log(a)//undefined
var a = 2
console.log(a)//2

//entretanto ao utilizar LET ele impede o hoisting

//ERRO: console.log(b)
let b = 5
console.log(b)//5



//String é toda cadeia de caracteres dentro do JS

//podemos declarar uma STRING com ""(aspas duplas)
const a = "tiago"

//podemos declarar uma STRING com ''(aspas simples)
const b = 'Santos'

//podemos declarar uma STRING com ``(crase) template string
const c = `Pereira`
 

//Temos alguns métodos dentro da Função STRING

//mostra o caractere na posição indicada
console.log(a.charAt(2))//a

//mostra a posição da letra
console.log(a.indexOf("g"))//3

//retorna o texto a partir da posição indicada
console.log(a.substring(2))//ago


//concatenar varias cadeias de caracteres
console.log(a.concat(b).concat(c))//tiagoSantosPereira

//replace altera algum valor
console.log(a.replace("a", 4))//ti4go

//transformar uma String em um array
let nomes = "tiago,santos,pereira"
//utilize o método split indique qual o separador do array
console.log(nomes.split(','))//[ 'tiago', 'santos', 'pereira' ]

//Arrow Function
//é uma forma reduzida de declarar uma função
const soma = (a,b) => a + b
console.log(soma(2,3))//5


//parametros padrão(default)
function texto(text = 'Node'){
    console.log(text)
}
texto()//Node
texto("oi")//oi


//operador rest
//multiplos parametros nas funções
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))//15
 
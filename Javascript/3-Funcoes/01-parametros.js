//No js os parametros e retornos são opcionais

function soma (n1, n2){
    const valor = n1 + n2
    return valor
}

//podemos executar um função sem parametro só que ele retorna NaN
console.log(soma())//NaN

//podemos passar apenas 1 valor só que ele não consegue calcular
console.log(soma(4))//NaN

//e podemos passar mais parametros que o solicitado
//entretanto ele vai pegar apenas quantos a Função solicita
console.log(soma(4,5,7,8))//9


//por isso devemos passar de forma correta os parametros
console.log(soma(3,2))//5
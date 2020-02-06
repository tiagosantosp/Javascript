//No JS podemos fazer uma função sem parametros
//e ao executar ela passar parametros

function soma(){
    let soma = 0
    /*dentro de toda função temos os arguments que é um array
    para os parametros da função*/
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

//sendo assim ele consegue utilizar os parametros mesmo que não seja declarado
console.log(soma(4,7,8,9))//28
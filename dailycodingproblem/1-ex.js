/*Dada uma lista de números e um número k, retorne se dois números da lista somam k.
Por exemplo, dados [10, 15, 3, 7] e k de 17, retorne verdadeiro, pois 10 + 7 é 17.*/

function lista(...list){
    return list
}


function verificaSoma(lista, verificador){
    let resultado
    for (let i of lista){
      for (let n = 0; n < lista.length; n++){
        console.log(`${i} +  ${lista[n]} = ${i + lista[n]}`)
        let soma = i + lista[n]
        if (soma == verificador){
          return resultado = true                
        }else {
          resultado = false
        }
    }}
    return resultado
}

console.log(verificaSoma(lista(1,2,3,4), 6))

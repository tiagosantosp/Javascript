/*Para estrutura de controle if podemos fazar algo caso
o resultado seja falso para isso utilizamos o else*/

//SE (teste logico for veidadeiro)
//      {Faça isso}
//SE Não { Faça aquilo}

let nota = 4

if (nota > 7){
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
}

//podemos tambem encadear varios IFs
console.log("")

let verificarNota = function(nota) {
    if (nota > 7){
        console.log("APROVADO")
    } else if (nota >= 5) { // senão se
        console.log("RECUPERAÇÂO")
    } else if (nota < 5) {
        console.log("REPROVADO")
    } else {
        console.log("nota inválida!!!")
    }
}

verificarNota(1)//REPROVADO
verificarNota(5)//RECUPERAÇÂO
verificarNota(9)//APROVADO
verificarNota("ola")//nota inválida!!!
//Variaveis com let possui o escopo de bloco

let n = 1
{
    let n = 2
    console.log(n)//2
}
console.log(n)//1

//entretanto caso dentro do bloco a variavel não seja encontrada
//ela vai procurar fora do bloco

let n2 = 4
{
    console.log(n2)//4
}


//uma variavel let não pode ser redeclarada apenas podemos alterar 
//seu valor

// ERRO: let n2 = 5
n2 = 5 // OK



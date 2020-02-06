//Utilizando a palavra IN no laço FOR podemos percorrer 
//um Array ou um objeto

let numeros = [7, 4, 9, 0, 5]

//Para cada Num em numeros faça
for (let num in numeros){
    //num será o indice do array
    console.log(`índice ${num} = ${numeros[num]}`)
}


//Podemos tambem percorrer um Objeto

let pessoa = {
    nome: "tiago",
    idade: 25,
    peso: 80
}

//para cada atributo em pessoa
for (let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}
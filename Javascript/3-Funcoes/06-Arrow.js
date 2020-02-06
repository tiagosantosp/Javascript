//Para diminuir a quantidade de código ao gerar uma função
//podemos optar por utilizar as Arrow Functions

// na forma convencional escrevemos desse geito
function dobro(num) {
    return num * 2
}
console.log(dobro(4))//8

/*utilizando AF temos que nos atentar pois
as AF são funçoes anônimas devem ser colocadas dentro de variaveis*/

//declaramos a variavel recebendo os parametros da AF e seu corpo
let dobrar = (a) => {
    return a * 2
}
console.log(dobrar(3)) // 6

//temos uma forma mais reduzida onde eliminamos a palavra return
let dobrado = a => a * 2

console.log(dobrado(7)) //  14


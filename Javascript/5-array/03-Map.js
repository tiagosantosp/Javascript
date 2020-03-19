const nums = [1,2,3,4,5]

//Map é ele retorna um novo array calculado

const dobro = nums.map(elemento => elemento * 2)
console.log(dobro)//[ 2, 4, 6, 8, 10 ]


//podemos encadear vários maps

const soma10 = array => array + 10
const dobraValor = array => array * 2
const dinheiro = array => `R$ ${parseFloat(array).toFixed(2).replace('.',',')}`

const resultado = nums.map(soma10).map(dobraValor).map(dinheiro)
console.log(resultado)
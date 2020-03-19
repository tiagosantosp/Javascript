// Object.values retorna o valor dos atributos do obj
// Object.entries retorna tanto as keys quanto os values como array
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))//[ 1, 2, 3 ]
console.log(Object.entries(obj))//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


//Classes
class Animal {}
class Cachorro extends Animal {}
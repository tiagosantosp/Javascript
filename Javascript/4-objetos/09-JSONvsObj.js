//Um JSON é diferente de obj pois um obj é um paradigma de programação
// um JSON é uma forma de transmitir dados

const obj = { a: 1, b: false, c: "tiago", falar(c) { console.log(`Olá ${this.c}`) }}

//para transformar um objeto em JSON utilizamos o método stringify

console.log(JSON.stringify(obj))//{"a":1,"b":false,"c":"tiago"}

//note que tanto o nome do atributo quanto o valor como string está entre ""(aspas duplas)
// e note que JSON por ser apenas para trafegar dados ele elimina os métodos

//para transformar um JSON em obj utilizamos o método parse
console.log(JSON.parse('{"nome": "tiago", "idade": 25}'))//{ nome: 'tiago', idade: 25 }
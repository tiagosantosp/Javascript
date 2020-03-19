//DESAFIO = pegar apenas os preços do JSON utilizando o map

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = obj => obj.preco
const resultado = carrinho.map(paraObj).map(apenasPreco)

console.log(resultado)


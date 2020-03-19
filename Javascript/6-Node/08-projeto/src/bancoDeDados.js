const sequencia = {
    _id: 1,
    get id() {
        return this._id++
    } 
}


const produtos = {}

function SalvarProdutos(produto){
    if(!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { SalvarProdutos, getProduto, getProdutos}
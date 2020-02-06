// function factory nada mais é do que voce retornar um Obj de uma função
// sendo assim voce instância uma obj mais facilmente

//forma simples
function pessoa (){
    return {
        nome: "tiago",
        idade: 25
    }
}

//ao chamar a função ela instância um novo obj
console.log(pessoa())//{ nome: 'tiago', idade: 25 }


//forma composta
//podemos tambem fazer a passagem de atributos atraves dos parametros
function produto (nome, valor){
    return {//veja que não preciso colocar os ":"
        nome,
        valor
    }
}

console.log(produto("açucar", 1.5))//{ nome: 'açucar', valor: 1.5 }


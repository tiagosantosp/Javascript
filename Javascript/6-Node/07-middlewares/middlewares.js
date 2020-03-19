//no padrao middleware delimitamos apenas uma esponsabilidade para cada função
//chain of  responsability


//a função pode ter um obj que será executado e se necessário chamará 
//a próxima função idependente da ordem
const passo1 = (contexto,  next) => {
    contexto.valor1 = 'mid1'
    next()
}



const passo2 = (contexto,  next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'



//temos uma função que recebe o obj e encadeia as outras funções em um array de funções
const executar = (contexto, ...middlewares) => {
    //criamos uma função que excuta cada função através de um indice
    const execPasso = indice => {
        //a função sera executada se o array de funções for true E
        //o indice for menor que o array de funções E
        middlewares && indice < middlewares.length &&
            //ele executa a função na posição do indice e adiciona um incremento no indice
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    //chama a função de executar cada indice passando o inicial sendo 0
    execPasso(0)
}


//agora podemos criar o obj e passar a quantidade de e ordem de funções que precisarmos
const contexto1 = {}
executar(contexto1, passo1, passo2, passo3)

const contexto2 = {}
executar(contexto2, passo2, passo1, passo3)

const contexto3 = {}
executar(contexto3, passo1, passo3)

console.log(contexto1)//{ valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }
console.log(contexto2)//{ valor2: 'mid2', valor1: 'mid1', valor3: 'mid3' }
console.log(contexto3)//{ valor1: 'mid1', valor3: 'mid3' }
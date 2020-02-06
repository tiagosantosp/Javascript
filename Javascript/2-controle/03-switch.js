//Switch é uma estrutura de multiplas escolhas


const calculaNota = function (nota){
    
    //passamos um valor para o switch
    switch (Math.floor(nota)){
        //e colocamos as escolhas
        case 10:
        case 9:
            console.log("APROVADO")
            //para cada instrução devemos colocar a palavra BREAK
            //caso contrario ele vai executar as outras opções 
            break
        case 8: case 7: case 6: case 5:
            console.log("RECUPERAÇÂO")
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log("REPROVADO")
            break
            //utilizamos a opção padrao caso não seja escolhida as anteriores
        default:
            console.log("VALOR INVÁLIDO!!!")

    }
}

calculaNota(9)//APROVADO
calculaNota(6)//RECUPERAÇÃO
calculaNota(1)//REPROVADO
calculaNota(-4)//VALOR INVÁLIDO
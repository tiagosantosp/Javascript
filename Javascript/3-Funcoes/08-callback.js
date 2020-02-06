/*função Callback nada mais é que retornar uma função a partir de uma função
e passala como parametro para outra função ou a mesma*/

function somarDobra(n1, n2, dobra){
    let soma = n1 + n2
    //veja que retornei a soma como parametro da função dobra
    return  dobra(soma)
}

//agora ao invocar a função o terceiro parametro deve ser uma função
// a função arrow somado recebe o valor de retorno da soma e executa a função
somarDobra(1, 2, somado =>  console.log(somado * 2 ))//6
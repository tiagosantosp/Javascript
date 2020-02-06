//Prametro padrão serve para caso não seja passado algum valor para a função
//ela assume um valor padrão


//caso não seja passado valor a variavel pega o valor após o igual
function soma(a = 1, b = 1){
    return a + b
}

console.log(soma())//2

console.log(soma(3))//4

console.log(soma(5, 3))//8
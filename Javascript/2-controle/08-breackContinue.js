//temos duas palavras reservadas com determinadas funções
// dentro dos laços são elas break e continue

//o break serve para sair do laço
for (let i = 0; i < 10; i++){
    //se i for igual a 5  saia 
    if (i == 5){
        break
    }
    console.log(i)
}

console.log()
//o continue serve para pular uma volta no laço
for (let n = 0;n < 6; n ++){
    //se n for igual a 3 pule pra proxima
    if (n == 3){
        continue
    }
    console.log(n)
}

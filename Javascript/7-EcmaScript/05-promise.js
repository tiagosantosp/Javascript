function falarDepoisDe(segundos, frase){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(5, "testando...")
    .then(texto => console.log(texto))
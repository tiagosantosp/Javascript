

function testePromise(texto){
    return new Promise(resolve => {
        resolve(texto)
    })
}


testePromise("olá mundo")
    .then(t => console.log(t))
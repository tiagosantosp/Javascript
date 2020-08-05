const fetch = require("node-fetch");
const url =`https://api.lyrics.ovh/v1/Taylor Swift/cardigan`


const letraMusica = (letra) => {
  const conteudo = document.createElement('p')
  conteudo.innerHTML = letra.lyrics
  return conteudo
}


fetch(url , { 
    method: 'get' // opcional 
  }).then(
    response => response.json()
  ).then(letra => {
    document.body.appendChild(letraMusica(letra))
  })

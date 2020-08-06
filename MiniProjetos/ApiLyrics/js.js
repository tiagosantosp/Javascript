
const url =`https://api.lyrics.ovh/v1/Taylor Swift/cardigan`
const p = document.getElementById('letra')

fetch(url , { 
    method: 'get' // opcional 
  }).then(
    response => response.json()
  ).then(letra => {
    console.log(letra.lyrics)
    p.innerHTML = letra.lyrics
    p.style.textAlign = 'justify'
  })


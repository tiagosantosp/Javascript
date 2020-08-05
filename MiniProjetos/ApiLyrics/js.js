
const url =`https://api.lyrics.ovh/v1/Taylor Swift/cardigan`





fetch(url , { 
    method: 'get' // opcional 
  }).then(
    response => response.json()
  ).then(letra => {
    console.log(typeof(letra.lyrics))
    document.body.innerHTML = `<p>${letra.lyrics}</p>`
  })


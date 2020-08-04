const fetch = require("node-fetch");

const url =`https://api.lyrics.ovh/v1/Taylor Swift/cardigan`



fetch(url , { 
    method: 'get' // opcional 
  }).then(
    response => response.json()
  ).then(data => console.log(data.lyrics))


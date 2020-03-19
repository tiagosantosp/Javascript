//lodash é pacote com um conjunto de funções para utilizar dentro do js
//ao não colocar o caminho relativo ele procura no conjunto de pastas até achar o lodash
const _ = require('lodash')

setInterval(() => console.log(_.random(10, 20)),1000)
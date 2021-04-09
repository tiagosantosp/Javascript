import axios from "axios";

let pok = []

for (let n = 1; n < 152; n++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`)
        .then(response => { 
    pok[n]={
        id: n,
        nome: response.data.name,
        tipo: response.data.types[0].type.name,
        foto: response.data.sprites.other.dream_world.front_default
    }
})
}


export default  pok;
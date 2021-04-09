import React, {useState, useEffect }from 'react'
import Card from './Components/Card'
import api from './api'


function App() {
  
 
  const [pokemons, setPokemons] = useState([])
  const [num, setNum] = useState(1)

  useEffect(  () => { 
    api.get(`${num}`)
          .then(response => setPokemons(response.data) )
  })


  return (
    <>

      <Card pkm={pokemons}/>

      <br/>

      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Outro PKM </button>

    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import Card from './Components/Card'
import api from './api'


function App() {


  const [nome, setNome] = useState([])
  const [tipo, setTipo] = useState([])
  const [foto, setFoto] = useState([])
  const [num, setNum] = useState(1)

  useEffect(() => {
    api.get(`${num}`)
      .then(response => {
        setNome(response.data.name)
        setTipo(response.data.types[0].type.name)
        setFoto(response.data.sprites.other.dream_world.front_default)
      })
  }, [num])


  return ( 
    <>

    <Card nome={nome} tipo={tipo} foto={foto} />

    <br/>

    <p> {num} </p> <button onClick = {() => setNum(num + 1)}>Outro PKM</button>

    </>
  );
}

export default App;
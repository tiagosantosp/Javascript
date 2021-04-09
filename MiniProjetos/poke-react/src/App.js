import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import pok from './api'
import './App.css'




function App() {
  const [num, setNum] = useState([])

  useEffect(()=>{
    setNum(pok.map(pkm => <Card key={pkm.n} nome={pkm.nome} tipo={pkm.tipo} foto={pkm.foto}/> ))
  },[num])  

  return ( 
    <>
      <div id="fundo">
        {num}
      </div>
    </>
  );
}

export default App;
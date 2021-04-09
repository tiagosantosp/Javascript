import React, { useState } from 'react'
import './Card.css'



export default function Card(props) {

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [foto, setFoto] = useState('')

    function geraDados() {
        setNome(props.pkm.name)
        setTipo(props.pkm.types[0].type.name)
        setFoto(props.pkm.sprites.other.dream_world.front_default)
    }

    return (
        <div className={"pokeCard " + tipo} >
            <img src={foto} alt={nome}/>
            <h3>Nome: {nome}</h3>
            <h3>Tipo: {tipo}</h3>
            <button onClick={geraDados}>Gerar</button>

        </div>

    )
}
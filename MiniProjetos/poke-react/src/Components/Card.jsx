import React  from 'react'
import './Card.css'



export default function Card(props) {

  

    return (
        <div className={"pokeCard " + props.tipo} >
            <img src={props.foto} alt={props.nome}/>
            <h3>Nome: {props.nome}</h3>
            {<h3>Tipo: {props.tipo}</h3>}

        </div>

    )
}